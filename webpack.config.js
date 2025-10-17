const ts = require("typescript");

module.exports={
    entry:{
        bundle: "./src/index.ts"
    },
    output:{
        path:`${__dirname}/dist`,
        filename:"[ma,e].js",
    },
    mode:"development",
    resolve:{
        extensions:[".ts",".js"],
    },
    devServer:{
        tatic:{
            directory:`${__dirname}/dist`,
        },
        open: true,
        module: {
            rules: [{
                    test: /\.ts$/,
                    loader: "ts-loader",
            }]
        }
    },
}