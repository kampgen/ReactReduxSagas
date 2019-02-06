
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

// class Services {
//     static addTodoItem() {
//         return new Promise(resolve => {
//             setTimeout(() => {
//                 resolve({
//                     name: 'Teste',
//                     age: 24,
//                     repository: 'http://github.com/kampgen'
//                 });
//             }, 2000);
//         });
//     }
// }


// const TodoMutation = gql`
//   mutation ($text: String!) {
//     createTodo ( text: $text ) {
//       text
//     }
//   }
// `;

// export default compose(
//     graphql(TodoMutation, { name: 'addTodo' })
// )(Services);