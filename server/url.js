require('dotenv').config()
const AWS = require('aws-sdk')

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
})

function genURL(row) {

    if (row['tune'] !== "Greenwoodside") {
        return {
            tune: row.tune,
            sheet: row.sheet,
            url: ""
        } 
    }

    const params = {
        Bucket: "bagpipe-tunes",
        Key: `tunes/${row['tune']}.pdf`,
        Expires: 60,
    }

    return {
        tune: row.tune,
        sheet: row.sheet,
        url: s3.getSignedUrl("getObject", params)
    }

}

module.exports = genURL