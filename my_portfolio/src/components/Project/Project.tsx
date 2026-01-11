import Image from 'next/image'

export function Project() {
return(
    <>  
        <div>
            <Image src="/background/project-section-line.png"
                            alt="project-line"
                            width={80}
                            height={100}
                            className="bottom-20 right-20"
            />
            <Image src="/background/cloud-line-art.png"
                            alt="cloud-line"
                            width={350}
                            height={210}
                            className="bottom-20 right-20"
            />
        </div>
    </>
);
}