interface HomeCategoryListProps {
    label:string
}

export default function HomeCategoryList({ label }: HomeCategoryListProps) {
    return (
        <div className="w-fit">
            <h4 className="ml-[min(13px,3.467vw)] font-roboto font-normal text-[min(14px,3.733vw)] leading-[2em] md:ml-[min(13px,0.903vw)] md:text-[min(20px,1.389vw)]">
                {label}
            </h4>
        </div>
    )
}