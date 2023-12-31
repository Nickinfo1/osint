
import {BuildOptions} from './types/config';
import webpack from 'webpack';

import {buildPlugins} from  './buildPlugins';
import {buildLoaders} from  './buildLoaders';
import {buildResolves} from './buildResolves';
import {buildDevServer} from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

    let {mode, paths, isDev} = options;

    return {
        mode,
        entry: paths.entry,

        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolves(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: buildDevServer(options),
        plugins: buildPlugins(options),
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        }
    };
}


