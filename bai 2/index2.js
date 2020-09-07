let s1 = prompt('Nhap vao chuoi 1')
let s2 = prompt('Nhap vao chuoi 2')
let s3 = '';



function mergeString(s1, s2) {
    if (s1.length > s2.length) {
        for (let i = 0; i < s2.length; i++) {
            s3 += s1[i]
        }

        for (let i = s2.length; i < s1.length; i++) {
            s3 += s1[i]
        }
        console.log(s3)
    } else if (s2.length > s1.length) {
        for (let i = 0; i < s1.length; i++) {
            s3 += s1[i] + s2[i]
        }

        for (let i = s1.length; i < s2.length; i++) {
            s3 += s2[i]
        }
        console.log(s3)
    } else {
        for (let i = 0; i < s1.length; i++) {
            s3 += s1[i] + s2[i]
        }
        console.log(s3)
    }
}

mergeString(s1, s2)