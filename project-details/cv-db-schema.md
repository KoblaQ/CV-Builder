{
\_id: ObjectId,
userId: ObjectId,

personalInfo: {
fullName: string,
title: string,
email: string,
location: string
},

skills: [
{
name: string,
category: string,
keywords: string[]
}
],

projects: [
{
title: string,
description: string,
techStack: string[]
}
],

experience: [
{
company: string,
role: string,
description: string,
techStack: string[]
}
]
}
