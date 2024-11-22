from youtube_transcript_api import YouTubeTranscriptApi

def transcript_generator():
    url = "https://www.youtube.com/watch?v=sOBtexyC34Q"
    print("URL: ",url)

    video_id = url.replace("https://www.youtube.com/watch?v=","")
    print("Video id: ",video_id)

    transcript = YouTubeTranscriptApi.get_transcript(video_id)
    print(transcript)

    output = ""
    for x in transcript:
        sentence = x['text']
        output += f' {sentence}\n'

    return output