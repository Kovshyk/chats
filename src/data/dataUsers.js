export const dataUsers=[
    {
        user_id:'pretty',
        userName:'Pretty Cat',
        lastMessage:'1',
        userPhoto:'http://placekitten.com/202/300',
    },
    {
        user_id:'funny',
        userName:'Funny Cat',
        lastMessage:'3',
        userPhoto:'http://placekitten.com/203/300',
    },
    {
        user_id:'small',
        userName:'Small Cat',
        lastMessage:'2',
        userPhoto:'http://placekitten.com/204/300',
    },
    ]
export const dataUserObject={
    pretty: {
        user_id:'pretty',
        userName:'Pretty Cat',
        userPhoto:'http://placekitten.com/202/300',
        messages:[
            {   id:'pretty',
                userName:'Pretty Cat',
                time:['Aug 15th 22, 16:13:55 pm','Aug 15th 22','1'],
                message:'hello!!!'},
            {   id:'321',
                userName:'lol',
                time:['Aug 15th 22, 16:22:32 pm', 'Aug 15th 22','2'],
                message:'hello!'},
            {   id:'pretty',
                userName:'Pretty Cat',
                time:['Aug 15th 22, 16:54:11 pm', 'Aug 15th 22','3'],
                message:'how are you?'}
        ]
    },
    funny:{
        user_id:'funny',
        userName:'Funny Cat',
        userPhoto:'http://placekitten.com/203/300',
        messages:[

            {   id:'funny',
                userName:'Funny Cat',
                time:['Aug 17th 22, 13:22:33 pm','Aug 17th 22','4'],
                message:'how are you?'},
            {   id:'321',
                userName: 'lol',
                time:['Aug 17th 22, 13:44:55 pm', 'Aug 17th 22','5'],
                message:'i am good'}
        ]
    },
    small:{
        user_id:'small',
        userName:'Small Cat',
        userPhoto:'http://placekitten.com/204/300',
        messages:[
            {   id:'small',
                userName:'Small Cat',
                time:['Aug 18th 22, 12:13:55 pm','Aug 18th 22','6'],
                message:'hello!!!'}

        ]

    }
}