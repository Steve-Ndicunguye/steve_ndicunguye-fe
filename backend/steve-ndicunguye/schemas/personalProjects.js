export default{
    name:'personalProjects',
    title:'Personal Projects',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Project Title',
            type:'string'
        },
        {
            name:'projectLink',
            title:'Project Link',
            type:'string'
        },
        {
            name:'githubLink',
            title:'Github Link',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'Project Image',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}