import psutil, platform

def obter_informacoes_hardware():
    print("--- Informações de Hardware ---")
    print("Frequência da CPU: ", psutil.cpu_freq().current, "MHz")
    print("Memória Total: ", psutil.virtual_memory().total, "bytes")
    print("Disco: ", psutil.disk_usage('/').total, "bytes")
    print("--- Informações de Hardware ---")
    print("Nome do sistema operacional:", platform.system())
    print("Versão do sistema operacional:", platform.release())
    print("Arquitetura do processador:", platform.machine())
    print("Processador:", platform.processor())
    print("Rede: ", psutil.net_if_addrs())
    print("--------------------------------")

obter_informacoes_hardware()

