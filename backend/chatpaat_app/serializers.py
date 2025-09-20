from rest_framework import serializers

from chatpaat_app.models import Chat, ChatMessage 

     


class ChatSerializer(serializers.ModelSerializer):
    user_id = serializers.IntegerField(source='user.id', read_only=True)
    username = serializers.CharField(source='user.username', read_only=True)
    user_email = serializers.EmailField(source='user.email', read_only=True)

    class Meta:
        model = Chat
        fields = ["id", "user_id", "username", "user_email", "title", "created_at", "updated_at"]



# class ChatMessageSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = ChatMessage 
#         fields = ["id", "role", "content", "created_at"]



class ChatMessageSerializer(serializers.ModelSerializer):
    chat_id = serializers.UUIDField(source='chat.id', read_only=True)
    user_id = serializers.IntegerField(source='chat.user.id', read_only=True)
    username = serializers.CharField(source='chat.user.username', read_only=True)
    user_email = serializers.EmailField(source='chat.user.email', read_only=True)

    class Meta:
        model = ChatMessage
        fields = ["chat_id", "user_id", "username", "user_email", "role", "content", "created_at"]
