defmodule WhatChatWeb.Utils.Monitors.Monitor do
    use Agent
    def start_link(initial_state) do
        Agent.start_link(fn -> initial_state end, name: __MODULE__)
    end
    
    def get_challenge_state(challenge) do
        Agent.get(__MODULE__, fn state -> get_challenge_state(state, challenge) end)
    end
    
    def language_update(challenge, language) do
        Agent.update(__MODULE__, fn state -> language_update(state, challenge, language) end)
    end
    
      ### Private helper functions
    
      defp get_challenge_state(state, challenge) do 
        case state[challenge] do
          nil ->
            state
            |> Map.put(challenge, %{language: "ruby"})
            |> Map.get(challenge)
          data ->
            state[challenge]
        end
      end
    
      defp language_update(state, challenge, language) do
        case state[challenge] do
          nil ->
            state
            |> Map.put(challenge, %{language: language})
          data ->
            update_state(language, state, challenge, :language)
        end
      end
    
      ### second class helpers
    
      defp update_state(content, state, challenge, key) do
        put_in(state, [challenge, key], content)
    end
end