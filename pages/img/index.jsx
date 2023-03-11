import Image from "next/image"


export default function Images() {
    return (
        <div>
            <h4>Tag Image</h4>
            <Image
                src='/unit-16-img.jpg'
                width={1000}
                height={400}
                quality={100}
                
                
            ></Image>
        </div>
    )
}
