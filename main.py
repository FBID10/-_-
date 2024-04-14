from scapy.all import *
import logging
logging.getLogger("scapy.runtime").setLevel(logging.DEBUG)


# Configure logging
logging.basicConfig(filename='packet_sniffer.log', level=logging.INFO)
logging.info("Packet Sniffer Started")
from scapy.layers.l2 import ARP
from scapy.layers.dhcp import BOOTP


def packet_sniffer(packet):
    if packet.haslayer(ARP):
        from scapy.layers.inet import ICMP
    if packet.haslayer(ARP):

        # Process ARP packets
        logging.info("ARP Packet: %s" % packet.summary())

    elif packet.haslayer(ICMP):

        # Process ICMP packets
        logging.info("ICMP Packet: %s" % packet.summary())
    elif packet.haslayer(BOOTP):
        # Process BOOTP packets
        logging.info("BOOTP Packet: %s" % packet.summary())

# Sniff ARP packets
sniff(filter="arp", prn=packet_sniffer, count=10)

# Sniff ICMP packets
sniff(filter="icmp", prn=packet_sniffer, count=10)

# Sniff UDP packets on port 67 or 68
sniff(filter="udp and (port 67 or port 68)", prn=packet_sniffer, count=10)
