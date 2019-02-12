defmodule WhatChatWeb.SessionControllerTest do
    use WhatChatWeb.ConnCase
    

    alias WhatChat.Accounts
    alias WhatChat.Accounts.User


    @valid_login_attrs %{
      email: "someemail@whatchat.cm",
      password: "SomePassword"
    }

    @invalid_login_attrs %{email: "nil", password: "nil"}

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
        setup %{conn: conn} do
            {:ok, user} = Accounts.create_user(@create_attrs)
            {:ok, %{user: user, conn: conn}}
        end


        test "renders data when login_data is valid ", state do
            conn = post(state.conn, Routes.session_path(state.conn, :create),  @valid_login_attrs)
            
            assert  conn.status == 200
            assert  conn.assigns.user == Accounts.get_user! state.user.id
            assert conn.resp_body =~"{\"user\":{\"email\":\"someemail@whatchat.cm\""
        end

        test "renders data when login_data is invalid ", state do
            conn = post(state.conn, Routes.session_path(state.conn, :create),  @invalid_login_attrs)
            
            assert  conn.status == 401
            assert conn.resp_body == "{\"errors\":{\"detail\":\"Wrong email or password\"}}"
            
        end

    end
end