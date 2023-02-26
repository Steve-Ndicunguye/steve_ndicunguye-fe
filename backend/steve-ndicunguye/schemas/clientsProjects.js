export default{
    name:'clientsProjects',
    title:'Clients Projects',
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
            name:'imgUrl',
            title:'Project Image',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}