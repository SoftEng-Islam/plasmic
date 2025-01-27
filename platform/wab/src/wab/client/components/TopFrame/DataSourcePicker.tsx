import { Form } from "antd";
import React from "react";
import { Modal } from "src/wab/client/components/widgets/Modal";
import useSWR from "swr";
import { ApiProject, WorkspaceId } from "../../../shared/ApiSchema";
import {
  DataSourceType,
  getDataSourceMeta,
} from "../../../shared/data-sources-meta/data-source-registry";
import {
  A_DATA_SOURCE_LOWER,
  DATA_SOURCE_CAP,
  DATA_SOURCE_LOWER,
  DATA_SOURCE_PLURAL_LOWER,
} from "../../../shared/Labels";
import { UU } from "../../cli-routes";
import { useAppCtx } from "../../contexts/AppContexts";
import RefreshsvgIcon from "../../plasmic/q_4_icons/icons/PlasmicIcon__Refreshsvg";
import { DataSourceModal } from "../modals/DataSourceModal";
import { Spinner } from "../widgets";
import Button from "../widgets/Button";
import { Icon } from "../widgets/Icon";
import IconButton from "../widgets/IconButton";
import Select from "../widgets/Select";

interface DataSourcePickerProps {
  sourceType?: DataSourceType;
  existingSourceId: string | undefined;
  readOpsOnly?: boolean;
  onSelected: (result: { sourceId: string } | undefined) => Promise<void>;
  onCanceled: () => void;
  project: ApiProject;
}

export function DataSourcePicker({
  sourceType,
  existingSourceId,
  readOpsOnly,
  onSelected,
  onCanceled,
  project,
}: DataSourcePickerProps) {
  const appCtx = useAppCtx();

  const thisProjectsWorkspace =
    project.workspaceId &&
    appCtx.workspaces.find((w) => w.id === project.workspaceId);
  const { data, mutate, isValidating } = useSWR(
    () =>
      thisProjectsWorkspace
        ? `/data-source/sources?workspaceId=${thisProjectsWorkspace!.id}`
        : null,
    async () => await appCtx.api.listDataSources(thisProjectsWorkspace!.id)
  );

  const [addNewDataSourceForWorkspace, setAddNewDataSourceForWorkspace] =
    React.useState<WorkspaceId>();
  const [selectedSourceId, setSelectedSourceId] =
    React.useState(existingSourceId);

  return (
    <>
      <Modal
        open
        title={`Select ${DATA_SOURCE_LOWER}`}
        onCancel={onCanceled}
        footer={null}
        onOk={() =>
          onSelected(
            selectedSourceId ? { sourceId: selectedSourceId } : undefined
          )
        }
      >
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 20,
          }}
          onFinish={async () => {
            await onSelected(
              selectedSourceId ? { sourceId: selectedSourceId } : undefined
            );
          }}
        >
          {!thisProjectsWorkspace ? (
            <Form.Item wrapperCol={{ span: 24 }}>
              Your project doesn't belong in a workspace. You can only use data
              sources from a project in a workspace.
            </Form.Item>
          ) : !data ? (
            <Form.Item wrapperCol={{ span: 24 }}>
              <Spinner />
            </Form.Item>
          ) : (
            (() => {
              const sources =
                data.find(
                  ({ workspace, dataSources }) =>
                    workspace.id === thisProjectsWorkspace.id
                )?.dataSources ?? [];
              return (
                <Form.Item label={DATA_SOURCE_CAP} name={"sourceId"}>
                  <div className="flex">
                    <Select
                      name={"dataSource"}
                      value={selectedSourceId}
                      onChange={(selectedId) => {
                        if (selectedId === "create") {
                          setAddNewDataSourceForWorkspace(
                            thisProjectsWorkspace.id
                          );
                        } else {
                          setSelectedSourceId(selectedId ?? undefined);
                        }
                      }}
                      placeholder={`Select ${A_DATA_SOURCE_LOWER} from your workspace to use`}
                      isDisabled={isValidating}
                      type="bordered"
                      className="flex-fill"
                    >
                      <Select.Option
                        key="create"
                        textValue={`Create new ${DATA_SOURCE_LOWER}`}
                        value="create"
                      >
                        Create a new {DATA_SOURCE_LOWER}...
                      </Select.Option>
                      {sources
                        .filter(
                          (source) =>
                            !readOpsOnly ||
                            getDataSourceMeta(source.source).ops.some(
                              (op) => op.type === "read"
                            )
                        )
                        .map((source) => (
                          <Select.Option
                            key={source.id}
                            textValue={source.name}
                            value={source.id}
                          >
                            {source.name}
                          </Select.Option>
                        ))}
                    </Select>
                    <IconButton onClick={() => mutate()}>
                      <Icon icon={RefreshsvgIcon} />
                    </IconButton>
                  </div>
                </Form.Item>
              );
            })()
          )}
          <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
            <Button
              className="mr-sm"
              type="primary"
              htmlType="submit"
              data-test-id="prompt-submit"
              disabled={!selectedSourceId}
            >
              Confirm
            </Button>
            <Button className="mr-sm" onClick={onCanceled}>
              Cancel
            </Button>
            {thisProjectsWorkspace && (
              <a
                target={"_blank"}
                href={
                  UU.workspace.fill({
                    workspaceId: thisProjectsWorkspace.id,
                  }) + "#tab=dataSources"
                }
              >
                Manage {DATA_SOURCE_PLURAL_LOWER}
              </a>
            )}
          </Form.Item>
        </Form>
      </Modal>
      {addNewDataSourceForWorkspace && (
        <DataSourceModal
          key={addNewDataSourceForWorkspace}
          appCtx={appCtx}
          editingDataSource="new"
          workspaceId={addNewDataSourceForWorkspace}
          onDone={() => setAddNewDataSourceForWorkspace(undefined)}
          onUpdate={async (source) => {
            await mutate();
            setSelectedSourceId(source.id);
          }}
          dataSourceType={sourceType}
        />
      )}
    </>
  );
}
