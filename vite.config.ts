import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import dts from "vite-plugin-dts"
import path from "path"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

export default defineConfig(({ command }) => {
    const isBuild = command === "build"

    // 公共插件
    const plugins = [
        vue(),
        // 启用自动导入

        AutoImport({
            imports: ["vue"],
            resolvers: [ElementPlusResolver()],
            dts: path.resolve(__dirname, "auto-imports.d.ts"),
        }),
        // 启用组件自动注册

        Components({
            resolvers: [ElementPlusResolver()],
            dts: path.resolve(__dirname, "components.d.ts"),
            // directoryAsNamespace: true, // 库模式下建议关闭
        }),
        // build 模式才生成类型声明文件
        isBuild &&
        dts({
            outDir: "dist",
            insertTypesEntry: true,
            entryRoot: "src",
        }),
    ].filter(Boolean)

    const resolve = {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    }

    if (!isBuild) {
        // 开发预览模式（example）
        return {
            root: path.resolve(__dirname, "examples"),
            plugins,
            resolve
        }
    }

    // 库打包模式
    return {
        plugins,
        resolve,
        build: {
            lib: {
                entry: path.resolve(__dirname, "src/index.ts"),
                name: "FormCookRender",
                fileName: (format) => `form-cook-render.${format}.js`,
            },
            rollupOptions: {
                // 外部依赖，不打包
                external: ["vue", "element-plus"],
                output: {
                    globals: {
                        vue: "Vue",
                        "element-plus": "ElementPlus",
                    },
                },
            },
            cssCodeSplit: true,
        },
    }
})
