export default {
    style_container: {
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        width: "100%",
    },
    style_item_wrap: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "20px",
        width: "100%",
        border: "1px solid var(--el-border-color-light)",
        padding: "12px",
        borderRadius: "6px",
    },
    style_item_content: {
        flex: 1,
        flexShrink: 0,
        minHeight: "24px"
    },
    style_btnAdd_container: {
        textAlign: "right",
    },
    style_btnDel_container: {},
};