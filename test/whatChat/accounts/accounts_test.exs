defmodule WhatChat.AccountsTest do
  use WhatChat.DataCase

  alias WhatChat.Accounts

  describe "users" do
    alias WhatChat.Accounts.User

    @valid_attrs %{email: "some email", image: "some image", password: "some password", password_hash: "some password_hash", username: "some username"}
    @update_attrs %{email: "some updated email", image: "some updated image", password: "some updated password", password_hash: "some updated password_hash", username: "some updated username"}
    @invalid_attrs %{email: nil, image: nil, password: nil, password_hash: nil, username: nil}

    def user_fixture(attrs \\ %{}) do
      {:ok, user} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Accounts.create_user()

      user
    end

    @tag :skip
    test "list_users/0 returns all users" do
      user = user_fixture()
      assert Accounts.list_users() == [user]
    end

    @tag :skip
    test "get_user!/1 returns the user with given id" do
      user = user_fixture()
      assert Accounts.get_user!(user.id) == user
    end

    @tag :skip
    test "create_user/1 with valid data creates a user" do
      assert {:ok, %User{} = user} = Accounts.create_user(@valid_attrs)
      assert user.email == "some email"
      assert user.image == "some image"
      assert user.password == "some password"
      assert user.password_hash == "some password_hash"
      assert user.username == "some username"
    end

    @tag :skip
    test "create_user/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Accounts.create_user(@invalid_attrs)
    end

    @tag :skip
    test "update_user/2 with valid data updates the user" do
      user = user_fixture()
      assert {:ok, %User{} = user} = Accounts.update_user(user, @update_attrs)
      assert user.email == "some updated email"
      assert user.image == "some updated image"
      assert user.password == "some updated password"
      assert user.password_hash == "some updated password_hash"
      assert user.username == "some updated username"
    end

    @tag :skip
    test "update_user/2 with invalid data returns error changeset" do
      user = user_fixture()
      assert {:error, %Ecto.Changeset{}} = Accounts.update_user(user, @invalid_attrs)
      assert user == Accounts.get_user!(user.id)
    end

    @tag :skip
    test "delete_user/1 deletes the user" do
      user = user_fixture()
      assert {:ok, %User{}} = Accounts.delete_user(user)
      assert_raise Ecto.NoResultsError, fn -> Accounts.get_user!(user.id) end
    end

    @tag :skip
    test "change_user/1 returns a user changeset" do
      user = user_fixture()
      assert %Ecto.Changeset{} = Accounts.change_user(user)
    end
  end
end
