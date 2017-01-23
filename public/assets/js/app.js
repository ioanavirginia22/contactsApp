//START
    //  method-get START
    //   getul l-am pus in aceasta functie pt a ma putea folosi de el mai jos imediat dupa post
    function getContacts() {
      $.ajax({
        url: 'https://contactos-afbe1.firebaseio.com/.json',
        type: "GET",
        success: function (res) {
           $.each(res.users, function (index, user) {
                console.log(index);
                $("tbody").append("<tr class='first-row' data-id="+ index +"><td class='user-name'><span>" + user.name + "</span></td><td class='user-phone'><span>" + user.phone + "</span></td><td class='user-mail'><span>" + user.email + "</span><button type='button' class='remove-user' data-toggle='modal' data-target='#myModal-delete-user'><i class='fa fa-trash' aria-hidden='true'></i></button><button type='button' class='edit-user'><i class='fa fa-pencil' aria-hidden='true'></i></button></td></tr>" );
             });
        },
        error: function(error) {
          alert("error: " + error);
        }
      });
   }
   getContacts();
   //methog get END

   // method post START
       $(".button-save").on("click", function() {
           var newItem = $(".modal-body .first-input").val();
           var newPhone = $(".modal-body .second-input").val();
           var newEmail = $(".modal-body .third-input").val();

           var newUser = {
               name: newItem,
               phone: newPhone,
               email: newEmail
            };

            var isCorect = true;

            if($('.modal-body .first-input').val() === '') {
                $(".check-input-name").html("*please insert the name");
                isCorect = false;
            } else {
                $(".check-input-name").html("");
            }

            if($('.modal-body .second-input').val() === '') {
                $(".check-input-phone").html("*please insert the phone number");
                isCorect = false;
            } else {
                $(".check-input-phone").html("");
            }

            if($('.modal-body .third-input').val() === '') {
                $(".check-input-email").html("*please insert the email");
                isCorect = false;
            } else {
                $(".check-input-email").html("");
            }

            if (isCorect === false) {
                return;
            }

            $.ajax ({
               url: 'https://contactos-afbe1.firebaseio.com/users.json',
               type: 'POST',
               data: JSON.stringify(newUser) ,
                success: function (data) {
                    console.log("success",data);
                    $(".modal").modal('hide');
                }
            });

             $("tbody").html("");
             getContacts();
             $('.modal-body input').val("");
             $(".check-input-name, .check-input-phone, .check-input-email").html("");
       });
       //method POST END
       // dc trebuie pus document ??
        $(document).on('click','.remove-user', function() {

                var trTable = $(this).parentsUntil("tbody");

                var userId = $(this).parents("tr").attr("data-id");
                console.log(trTable);
                $(document).on('click','.button-delete-yes', function() {
                    trTable.hide();

                var myUrl = "https://contactos-afbe1.firebaseio.com/users/" + userId + "/.json";
                    $.ajax ({
                        url: myUrl,
                        type: 'DELETE',
                        success: function (data) {
                            console.log("success",data);
                    }
                    });

                    //aici va fii callul de delete a user
                });
        });


//END
