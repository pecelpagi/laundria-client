export default ({ title, InputSearch, PageSize }) => (
    <div className="flex p-3 flex-col sm:flex-row sm:justify-between items-center gap-2">
        <div className="w-full text-base font-semibold">{title}</div>
        <div className="w-full flex order-last justify-end gap-3">
            <InputSearch />
            <PageSize />
        </div>
    </div>
)