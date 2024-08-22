## Schema's

    Space{
        space_id,
        title,
        description,
        venue,
        subject,
        fromtime,
        totime,
        expiry_date(finishing date)
    }


    User{
        user_id,
        Username,
        Password,
        Email,
        Registered Spaces : Array,
        Created Spaces : Array
    }



##  API'S REQUIRED

-  For recieving 
    {
        username,
        password,
        email
    }

    as input and sending back 

    {
        email sent : true / false,
        success : true
    }

- For recieving 
    {
        otp
    }

    as input and sending back 

    {
        verified : true,
        success : true
    }

- For recieving 
    {
        email,
        password
    }
    as input and sending back 

    {
        token,
        success : true
    }

- For recieving

    {
        Authorization :  'Bearer ' + token
    }

    as input and sending the usename if the token is valid 
    {
        username
    }

- For recieving

    {
        Authorization :  'Bearer ' + token
    }

    as input and sending the all the spaces excluding the spaces that user created if the token is valid 
    {
        all_spaces_excluding_spaces_created_by_user as "spaces"
    }

- For recieving

    {
        Authorization :  'Bearer ' + token,
    }

    {
        title,
        description,
        subject,
        venue,
        form_time,
        to_time,
        date created : presentDate(date at the point of creation) `new Date()`
        expiry : default->(1 day)
    }

    as input and adding the space to DB and sending

    {
        msg : 'Space created successfully with id : space_id (id present in the database)'
        success : true
    }


- For recieving

    {
        Authorization :  'Bearer ' + token
    }
    {
        space_id
    }

    as input and adding the space to the current_users spaces list if the token is valid and returning
    {
        success : true
    }


- For recieving all the spaces that user registered by taking 

    {
        Authorization :  'Bearer ' + token
    }

    as input if the token is valid and returning
    {
        spaces
        success : true
    }

- For recieving all the spaces that user created by taking 

    {
        Authorization :  'Bearer ' + token
    }

    as input if the token is valid and returning
    {
        spaces
        success : true
    }