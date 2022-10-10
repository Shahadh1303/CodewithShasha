import sounddevice
from scripy.io.wavfile import write
fs=44100 #sample_rate
second=int(intput("Enter the time duration in seconds: "))
print("Recording....\n")
record_voice=sounddevice.rec(int(seconds * fs),sampleratefs,channels=2)
sounddevice.wait()
write("out wav,record_voice")
print("Finished...\nPlease Check it...")