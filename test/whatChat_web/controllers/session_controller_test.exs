defmodule WhatChatWeb.SessionControllerTest do
    use WhatChatWeb.ConnCase
    

    alias WhatChat.Accounts
    alias WhatChat.Accounts.User


    @valid_login_attrs %{
      email: "someemail@whatchat.cm",
      password: "SomePassword"
    }

    @invalid_login_attrs %{email: nil, password: nil}

    @create_attrs %{
        email: "someemail@whatchat.cm",
        image: "some image",
        password: "SomePassword",
        password_hash: "SomePassword_hash",
        username: "some username"
    }

    def fixture(:user) do
        {:ok, user} = Accounts.create_user(@create_attrs)
        user
    end
    
    setup %{conn: conn} do
        {:ok, conn: put_req_header(conn, "accept", "application/json")}
    end


    describe "create session" do
        

        test "renders data when login_data is valid ", %{conn: conn} do
            {:ok, user} = Accounts.create_user(@create_attrs)
            conn = post(conn, Routes.session_path(conn, :create),  @valid_login_attrs)
            
            assert  conn.status == 200

            
        end

    end
end