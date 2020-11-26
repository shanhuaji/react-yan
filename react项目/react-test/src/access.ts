export default function(initialState) {
 /*  console.log(initialState);
    console.log(2222222); */
    
  const { userId, role } = initialState;
 /*  console.log('userId', userId);
  console.log('role', role); */
    
  return {
    canReadFoo: true,
    canUpdateFoo: role === 'admin',
    canDeleteFoo: foo => {
      return foo.ownerId === userId;
    },
  };
}
