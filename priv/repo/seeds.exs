# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     WhatChat.Repo.insert!(%WhatChat.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.
user = (:crypto.strong_rand_bytes(15) |> Base.url_encode64 |> binary_part(0, 15))
%{
  email: user <> "@email.com",
  #image: "https://identicapi.herokuapp.com/img/" <> user,
  image: "https://loremflickr.com/400/400/profile?lock=" <> Integer.to_string(:rand.uniform(100)), 
  password: "secret",
  username: user
}
|> WhatChat.Accounts.create_user


Enum.map([%{email: "loic.nguefack@enate.fr", id: 11, image: "https://loremflickr.com/400/400/?lock=88",username: "Nguefack Loic"},
%{
  email: "alextuofo@rednate.fr",
  image: "https://loremflickr.com/400/400/?lock=958",
  password: "secret",
  username: "Alexandre Tuofo"
},
%{
  email: "socrater.hacking@cedinger.com",
  image: "https://loremflickr.com/400/400/man?lock=58",
  password: "secret",
  username: "Socrate Tuofo"
},
%{
  email: "bonus.info@elyseedate.fr",
  image: "https://loremflickr.com/400/400/profile?lock=86",
  password: "secret",
  username: "Bonus Tfo"
}], fn (value)->
  value
  |> WhatChat.Accounts.create_user 

end)


%{
  email: "test1@test.fr",
  image: "https://loremflickr.com/400/400/car?lock=81",
  password: "test1",
  username: "Test 1"
}|> WhatChat.Accounts.create_user 

%{
  email: "test2@test.fr",
  image: "https://loremflickr.com/400/400/baby?lock=71",
  password: "test2",
  username: "Test 2"
}|> WhatChat.Accounts.create_user

%{
  name: "SOme COnv",
  profile: "https://loremflickr.com/400/400/profile?lock=15"
} |> WhatChat.Discussions.create_conversation

user1 =  WhatChat.Accounts.get_user!(1) |> WhatChat.Repo.preload(:conversations)
user2 =  WhatChat.Accounts.get_user!(2) |> WhatChat.Repo.preload(:conversations)

conver = WhatChat.Discussions.get_conversation!(1) |> WhatChat.Repo.preload(:users)


changeset = Ecto.Changeset.change(conver) |> Ecto.Changeset.put_assoc(:users, [user1])
WhatChat.Repo.update!(changeset)


changeset = Ecto.Changeset.change(conver) |> Ecto.Changeset.put_assoc(:users, [user2])
WhatChat.Repo.update!(changeset)