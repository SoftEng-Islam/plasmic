/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* @flow */
import { darkTheme, lightTheme } from '../../styles';

let injectedCount = 0;
const injectedCache = {};

function getHead(document: Document) {
  return document.head || document.getElementsByTagName('head')[0];
}

function injectCss(document: Document, css: string): number {
  const head = getHead(document);
  const style = document.createElement('style');
  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));
  head.appendChild(style);

  injectedCache[++injectedCount] = style;
  return injectedCount;
}

function removeCss(document: Document, ref: number) {
  if (injectedCache[ref] == null) {
    return;
  }
  const head = getHead(document);
  head.removeChild(injectedCache[ref]);
  delete injectedCache[ref];
}

function applyStyles(element: HTMLElement, styles: Object) {
  element.setAttribute('style', '');
  for (const key in styles) {
    if (!Object.prototype.hasOwnProperty.call(styles, key)) {
      continue;
    }
    // $FlowFixMe
    element.style[key] = styles[key];
  }
}

function getTheme() {
  return window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
    ? darkTheme
    : lightTheme;
}

export { getHead, injectCss, removeCss, applyStyles, getTheme };
