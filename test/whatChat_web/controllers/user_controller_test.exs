defmodule WhatChatWeb.UserControllerTest do
  use WhatChatWeb.ConnCase

  alias WhatChat.Accounts
  alias WhatChat.Accounts.User

  @create_attrs %{
    email: "some email",
    image: "some image",
    password: "some password",
    password_hash: "some password_hash",
    username: "some username"
  }
  @update_attrs %{
    email: "some updated email",
    image: "some updated image",
    password: "some updated password",
    password_hash: "some updated password_hash",
    username: "some updated username"
  }
  @invalid_attrs %{email: nil, image: nil, password: nil, password_hash: nil, username: nil}

  @unauthenticated_error_msg %{"errors" => %{"detail" => "Unauthenticated User"}}

  def fixture(:user) do
    {:ok, user} = Accounts.create_user(@create_attrs)
    user
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    
    setup [:create_user]
    test "lists all users when not authenticated", %{conn: conn} do
      conn = get(conn, Routes.user_path(conn, :index))
      assert conn.status == 401
      assert json_response(conn, 401) == %{"errors" => %{"detail" => "Unauthenticated User"}}
    end

    test "lists all users when authenticated", %{conn: conn,  user: %User{id: id} = user} do
      conn = post(conn, Routes.session_path(conn, :create),  %{email: user.email , password: user.password})
       
      conn = get(conn, Routes.user_path(conn, :index))
      assert conn.status == 200
      assert json_response(conn, 200) != []
      
      assert [
        %{
          "email" => "some email", 
          "id" => id, 
          "image" => "some image",
          "token" => token, 
          "username" => "some username"
        }
      ] = json_response(conn, 200)["users"]
      
      
    end


  end

  describe "create user" do
    # @tag :skip
    test "renders user when data is valid", %{conn: conn} do
      conn = post(conn, Routes.user_path(conn, :create),  @create_attrs)
      assert  conn.status == 201
      # 
      assert conn.resp_body =~ "{\"user\":{\"email\":\"some email\""
      assert json_response(conn, 201)["errors"] == nil
      
      conn = post(conn, Routes.user_path(conn, :create),  @create_attrs)
      assert  conn.status == 422
      assert json_response(conn, 422)["errors"] == %{"email" => ["has already been taken"]}

    end

    # @tag :skip
    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.user_path(conn, :create),  @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update user" do
    setup [:create_user]

    test "renders user when data is invalid", %{conn: conn, user: %User{id: id} = user} do
      conn = put(conn, Routes.user_path(conn, :update, user), user: @update_attrs)

      assert @unauthenticated_error_msg = json_response(conn, 401)

      conn = get(conn, Routes.user_path(conn, :show, id))
      assert @unauthenticated_error_msg = json_response(conn, 401)
      
    end

    test "renders user when data is valid", %{conn: conn, user: %User{id: id} = user} do
      conn = post(conn, Routes.session_path(conn, :create),  %{email: user.email , password: user.password})
            
      conn = put(conn, Routes.user_path(conn, :update, user), user: @update_attrs)

      assert %{"id" => ^id} = json_response(conn, 200)["user"]

      conn = get(conn, Routes.user_path(conn, :show, id))

      assert %{
               "email" => "some updated email",
               "id" => id,
               "image" => "some updated image",
               "token" => token,
               "username" => "some updated username"
             } = json_response(conn, 200)["user"]
    end

    test "renders errors when data is invalid", %{conn: conn, user: user} do
      conn = put(conn, Routes.user_path(conn, :update, user), user: @invalid_attrs)
      assert json_response(conn, 401)["errors"] != %{}
    end
  end

  describe "delete user" do
    setup [:create_user]

    test "deletes chosen user when not logged", %{conn: conn, user: user} do
      conn = delete(conn, Routes.user_path(conn, :delete, user))
      
      assert json_response(conn, 401)["errors"] != %{}
      assert @unauthenticated_error_msg == json_response(conn, 401)
      
    end

    test "deletes chosen user when logged", %{conn: conn, user: user} do
      conn = post(conn, Routes.session_path(conn, :create),  %{email: user.email , password: user.password})
       
      conn = delete(conn, Routes.user_path(conn, :delete, user))
     
      assert response(conn, 204) == ""
      
      conn = get(conn, Routes.user_path(conn, :show, user.id))
      assert @unauthenticated_error_msg == json_response(conn, 401)
      
    end
  end

  defp create_user(_) do
    user = fixture(:user)
    {:ok, user: user}
  end
end
