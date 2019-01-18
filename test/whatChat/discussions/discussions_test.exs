defmodule WhatChat.DiscussionsTest do
  use WhatChat.DataCase

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

    @valid_attrs %{content: "some content", is_deleted: true}
    @update_attrs %{content: "some updated content", is_deleted: false}
    @invalid_attrs %{content: nil, is_deleted: nil}

    def message_fixture(attrs \\ %{}) do
      {:ok, message} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Discussions.create_message()

      message
    end

    test "list_messages/0 returns all messages" do
      message = message_fixture()
      assert Discussions.list_messages() == [message]
    end

    test "get_message!/1 returns the message with given id" do
      message = message_fixture()
      assert Discussions.get_message!(message.id) == message
    end

    test "create_message/1 with valid data creates a message" do
      assert {:ok, %Message{} = message} = Discussions.create_message(@valid_attrs)
      assert message.content == "some content"
      assert message.is_deleted == true
    end

    test "create_message/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Discussions.create_message(@invalid_attrs)
    end

    test "update_message/2 with valid data updates the message" do
      message = message_fixture()
      assert {:ok, %Message{} = message} = Discussions.update_message(message, @update_attrs)
      assert message.content == "some updated content"
      assert message.is_deleted == false
    end

    test "update_message/2 with invalid data returns error changeset" do
      message = message_fixture()
      assert {:error, %Ecto.Changeset{}} = Discussions.update_message(message, @invalid_attrs)
      assert message == Discussions.get_message!(message.id)
    end

    test "delete_message/1 deletes the message" do
      message = message_fixture()
      assert {:ok, %Message{}} = Discussions.delete_message(message)
      assert_raise Ecto.NoResultsError, fn -> Discussions.get_message!(message.id) end
    end

    test "change_message/1 returns a message changeset" do
      message = message_fixture()
      assert %Ecto.Changeset{} = Discussions.change_message(message)
    end
  end
end
