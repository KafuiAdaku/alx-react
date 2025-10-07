const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
    mode: "development",
    entry: {
        header: "./modules/header/header.js",
        body: "./modules/body/body.js",
        footer: "./modules/footer/footer.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "public")
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[hash].[ext]",
                            outputPath: "images"
                        }
                    },
                    {
                        loader: "image-webpack-loader",
                        options: {
                            mozjpeg: {progressive: true},
                            optipng: {enable: true},
                            pngquant: {quality: [0.65, 0.9], speed: 4}
                        }
                    }
                ]
            }
        ]
    },
    performance: {
        hints: false
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "ALX Dashboard"
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        port: 8654,
        open: true
    },
    devtool: "inline-source-map", // allows console.log point to your js file
    optimization: {
        splitChunks: {
            chunks: "all" // duplicates jquery/lodash into shared chunks
        }
    }
};
