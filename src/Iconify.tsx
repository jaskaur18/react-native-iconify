import React from 'react';

import IconNotFoundError from './errors/icon-not-found.error';
import PluginNotInstalledError from './errors/plugin-not-installed.error';
import { Icon } from './renderer';
import type { IconifyProps } from './types';

/* @@iconify-code-gen */
const icons = global.__ICONIFY__;
const isPluginInstalled = global.__ICONIFY_PLUGIN_LOADED__;

/**
 * Icon component
 * @param {string} icon - Icon name
 * @returns {React.ReactElement}
 * @example
 * <Icon icon="mdi:home" color="black" />
 */
export const Iconify = (props: IconifyProps) => {
  if (!isPluginInstalled) throw PluginNotInstalledError();

  const iconData = icons?.[props.icon];

  if (!iconData) {
    if (!__DEV__) return null;

    throw IconNotFoundError(props.icon);
  }

  return <Icon iconData={iconData} {...props} />;
};
