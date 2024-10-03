import path from "node:path";
import * as Repack from "@callstack/repack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const dirname = Repack.getDirname(import.meta.url);

export default (env) => {
  const config = {
    entry: "./src/index.tsx",
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.(c)ss$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
          use: ["file-loader?name=[name].[ext]"],
        },
      ],
    },
    devServer: {
      port: 3000,
      open: true,
      static: {
        directory: path.join(dirname, "public"),
      },
      compress: true,
    },
    resolve: {
      extensions: [".*", ".js", ".jsx", "css", ".tsx", ".ts"],
    },
    output: {
      filename: "bundle.js",
      path: path.resolve(dirname, "dist"),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        filename: "./index.html",
        favicon: "./public/favicon.ico",
        manifest: "./public/manifest.json",
      }),
    ],
  };

  return config;
};
