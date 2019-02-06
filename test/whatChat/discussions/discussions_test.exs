defmodule WhatChat.DiscussionsTest do
  use WhatChat.DataCase


  alias WhatChat.Accounts
  alias WhatChat.Discussions

  describe "conversations" do
    alias WhatChat.Discussions.Conversation

    @valid_attrs %{name: "some name", profile: "some profile"}
    @update_attrs %{name: "some updated name", profile: "some updated profile"}
    @invalid_attrs %{name: nil, profile: nil}

    def conversation_fixture(attrs \\ %{}) do
      {:ok, conversation} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Discussions.create_conversation()

      conversation
    end

    test "list_conversations/0 returns all conversations" do
      conversation = conversation_fixture()
      assert Discussions.list_conversations() == [conversation]
    end

    test "get_conversation!/1 returns the conversation with given id" do
      conversation = conversation_fixture()
      assert Discussions.get_conversation!(conversation.id) == conversation
    end

    test "create_conversation/1 with valid data creates a conversation" do
      assert {:ok, %Conversation{} = conversation} = Discussions.create_conversation(@valid_attrs)
      assert conversation.name == "some name"
      assert conversation.profile == "some profile"
    end

    test "create_conversation/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Discussions.create_conversation(@invalid_attrs)
    end

    test "update_conversation/2 with valid data updates the conversation" do
      conversation = conversation_fixture()
      assert {:ok, %Conversation{} = conversation} = Discussions.update_conversation(conversation, @update_attrs)
      assert conversation.name == "some updated name"
      assert conversation.profile == "some updated profile"
    end

    test "update_conversation/2 with invalid data returns error changeset" do
      conversation = conversation_fixture()
      assert {:error, %Ecto.Changeset{}} = Discussions.update_conversation(conversation, @invalid_attrs)
      assert conversation == Discussions.get_conversation!(conversation.id)
    end

    test "delete_conversation/1 deletes the conversation" do
      conversation = conversation_fixture()
      assert {:ok, %Conversation{}} = Discussions.delete_conversation(conversation)
      assert_raise Ecto.NoResultsError, fn -> Discussions.get_conversation!(conversation.id) end
    end

    test "change_conversation/1 returns a conversation changeset" do
      conversation = conversation_fixture()
      assert %Ecto.Changeset{} = Discussions.change_conversation(conversation)
    end
  end

  describe "conversation_user" do
    alias WhatChat.Discussions.ConversationUser

    @valid_attrs %{read_at: ~N[2010-04-17 14:00:00]}
    @update_attrs %{read_at: ~N[2011-05-18 15:01:01]}
    @invalid_attrs %{read_at: nil}

    def conversation_user_fixture(attrs \\ %{}) do
      {:ok, conversation_user} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Discussions.create_conversation_user()

      conversation_user
    end

    test "list_conversation_user/0 returns all conversation_user" do
      conversation_user = conversation_user_fixture()
      assert Discussions.list_conversation_user() == [conversation_user]
    end

    test "get_conversation_user!/1 returns the conversation_user with given id" do
      conversation_user = conversation_user_fixture()
      assert Discussions.get_conversation_user!(conversation_user.id) == conversation_user
    end

    test "create_conversation_user/1 with valid data creates a conversation_user" do
      assert {:ok, %ConversationUser{} = conversation_user} = Discussions.create_conversation_user(@valid_attrs)
      assert conversation_user.read_at == ~N[2010-04-17 14:00:00]
    end

    test "create_conversation_user/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Discussions.create_conversation_user(@invalid_attrs)
    end

    test "update_conversation_user/2 with valid data updates the conversation_user" do
      conversation_user = conversation_user_fixture()
      assert {:ok, %ConversationUser{} = conversation_user} = Discussions.update_conversation_user(conversation_user, @update_attrs)
      assert conversation_user.read_at == ~N[2011-05-18 15:01:01]
    end

    test "update_conversation_user/2 with invalid data returns error changeset" do
      conversation_user = conversation_user_fixture()
      assert {:error, %Ecto.Changeset{}} = Discussions.update_conversation_user(conversation_user, @invalid_attrs)
      assert conversation_user == Discussions.get_conversation_user!(conversation_user.id)
    end

    test "delete_conversation_user/1 deletes the conversation_user" do
      conversation_user = conversation_user_fixture()
      assert {:ok, %ConversationUser{}} = Discussions.delete_conversation_user(conversation_user)
      assert_raise Ecto.NoResultsError, fn -> Discussions.get_conversation_user!(conversation_user.id) end
    end

    test "change_conversation_user/1 returns a conversation_user changeset" do
      conversation_user = conversation_user_fixture()
      assert %Ecto.Changeset{} = Discussions.change_conversation_user(conversation_user)
    end
  end

  describe "messages" do
    alias WhatChat.Discussions.Message

    @valid_attrs %{content: "some content"}
    @update_attrs %{content: "some updated content"}
    @invalid_attrs %{content: nil, from_id: nil}

    @user1 %{
      email: "test11@texst.fr",
      image: "https://loremflickr.com/400/400/car?lock=81",
      password: "test1111",
      username: "Test 11"
    }
    
    @user2 %{
      email: "test22@texst.fr",
      image: "https://loremflickr.com/400/400/baby?lock=71",
      password: "test2222",
      username: "Test 22"
    }

    @conv %{
      name: "Testconv",
      profile: "https://loremflickr.com/400/400/group?lock=515"
    }

    setup do
      {:ok, user1} = @user1 |> Accounts.create_user()
      {:ok, user2} = @user2 |> Accounts.create_user()

      user1 = user1 |> Repo.preload(:conversations)
      user2 = user2 |> Repo.preload(:conversations)

      {:ok , conversation} = @conv |> Discussions.create_conversation()
      conversation = conversation |> Repo.preload(:users)


      changeset = Ecto.Changeset.change(conversation) |> Ecto.Changeset.put_assoc(:users, [user1])
      Repo.update!(changeset)


      changeset = Ecto.Changeset.change(conversation) |> Ecto.Changeset.put_assoc(:users, [user2])
      Repo.update!(changeset)


      valid_attrs = Map.put(@valid_attrs, :from_id, user1.id)
      valid_attrs = Map.put(valid_attrs, :conversation_id, conversation.id)

      {:ok, %{user: user1, valid_attrs: valid_attrs}}
    end

    def message_fixture(attrs \\ %{}) do
      {:ok, message} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Discussions.create_message()

      message
    end

    # @tag :skip
    test "list_messages/0 returns all messages", state do
      message = state[:valid_attrs] |> message_fixture()
      assert Discussions.list_messages() == [message]
    end

    # @tag :skip
    test "get_message!/1 returns the message with given id", state  do
      message = state[:valid_attrs] |> message_fixture()

      assert Discussions.get_message!(message.id) == message
    end

    @tag :skip
    test "create_message/1 with valid data creates a message" do
      assert {:ok, %Message{} = message} = Discussions.create_message(@valid_attrs)
      assert message.content == "some content"
      assert message.is_deleted == true
    end

    @tag :skip
    test "create_message/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Discussions.create_message(@invalid_attrs)
    end

    @tag :skip
    test "update_message/2 with valid data updates the message" do
      message = message_fixture()
      assert {:ok, %Message{} = message} = Discussions.update_message(message, @update_attrs)
      assert message.content == "some updated content"
      assert message.is_deleted == false
    end

    @tag :skip
    test "update_message/2 with invalid data returns error changeset" do
      message = message_fixture()
      assert {:error, %Ecto.Changeset{}} = Discussions.update_message(message, @invalid_attrs)
      assert message == Discussions.get_message!(message.id)
    end

    @tag :skip
    test "delete_message/1 deletes the message" do
      message = message_fixture()
      assert {:ok, %Message{}} = Discussions.delete_message(message)
      assert_raise Ecto.NoResultsError, fn -> Discussions.get_message!(message.id) end
    end

    @tag :skip
    test "change_message/1 returns a message changeset" do
      message = message_fixture()
      assert %Ecto.Changeset{} = Discussions.change_message(message)
    end
  end
end
