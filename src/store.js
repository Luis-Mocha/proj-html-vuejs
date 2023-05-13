import {reactive} from "vue";

export const store = reactive (
    {
        prova: 'prova prova',
        navList: ['home' , 'apple', 'microsoft', 'android', 'forums', 'contact us'],
        footerList: [
            {
                title: 'Popular Topics',
                list_item: ['Nam a dolor volutpat massa auctor semper' , 'Sed euismod nunc urna fermentum arcu dapibus fringilla.' , 'Cras lacinia teellus id mauris finibus lacus molestie' , 'Curabitur a scelerisque tigula' ]
            },
            {
                title: 'Recent Topics',
                list_item: ['Cras lacinia teellus id mauris finibus lacus molestie' , 'Proin at ligula sagittis vestibulum nisi vitae' , 'Sed nec metus at est tincidunt elementarum' , 'Nulla egestas nulla eu nulla suscipit molestie' ]
            },
            {
                title: 'Latest Replies',
                list_item: ['Cras lacinia teellus id mauris finibus lacus molestie' , 'Cras lacinia teellus id mauris finibus lacus molestie' , 'Nulla egestas nulla eu nulla suscipit molestie' , 'Mauribus ac nibh quis eros sagittis lacinia a et dui' ]
            }
        ]

    }
)