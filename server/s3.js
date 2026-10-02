
import 'dotenv/config'
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"

const s3 = new S3Client( {
    region: process.env.AWS_REGION
} )


const file = "tunes/Lochanside.pdf"

async function getTuneUrl(tune) {
    const command = new GetObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: `tunes/${tune}.pdf`
    })

    let url = await getSignedUrl(s3, command, { expiresIn: 1800 })
    return url
}

let url = await getTuneUrl(file)
console.log(url)

export default getTuneUrl