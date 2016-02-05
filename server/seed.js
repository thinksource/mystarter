Setting={
	'name':'ao3',
	'website':'www.ao3.com.au'

};

var users=[{username: "admin",email: 'admin@admin.com',verified: true,
				password:"admin123",roles: ['admin']},
				{username: "sheng",email: 'sheng@admin.com',verified: true,
								password:"sheng123",roles: []},
				{username: "test", email: "test@test.com",verified:true,
									password: "test123",roles:[]}
			];
if(Meteor.roles.find().count()==0){
	 Roles.createRole('admin', {unlessExists: true}); //delete this line
}

if (Meteor.users.find().count() == 0) {

 _.each(users, function(user){
	 var id;
	 id=Accounts.createUser({
		 username:user.username,
		 email:user.email,
		 verified: true,
		 password:user.password,
		 profile:{name:user.username}
	 });
	 if(user.hasOwnProperty('roles') && user.roles.length>0){

		 Roles.addUsersToRoles(id, user.roles);
	 }
 });
};
