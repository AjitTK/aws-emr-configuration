const instances = [
    {
      "Instance-Type": "a1.2xlarge",
      "Memory": "16.0 GiB",
      "CPUs": "8 vCPUs",
      "Physical Processor": "AWS Graviton Processor",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$148.92 monthly",
      "Linux Reserved cost": "$93.80 monthly"
    },
    {
      "Instance-Type": "a1.4xlarge",
      "Memory": "32.0 GiB",
      "CPUs": "16 vCPUs",
      "Physical Processor": "AWS Graviton Processor",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$297.84 monthly",
      "Linux Reserved cost": "$187.61 monthly"
    },
    {
      "Instance-Type": "a1.large",
      "Memory": "4.0 GiB",
      "CPUs": "2 vCPUs",
      "Physical Processor": "AWS Graviton Processor",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$37.23 monthly",
      "Linux Reserved cost": "$23.43 monthly"
    },
    {
      "Instance-Type": "a1.medium",
      "Memory": "2.0 GiB",
      "CPUs": "1 vCPUs",
      "Physical Processor": "AWS Graviton Processor",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$18.61 monthly",
      "Linux Reserved cost": "$11.75 monthly"
    },
    {
      "Instance-Type": "a1.metal",
      "Memory": "32.0 GiB",
      "CPUs": "16 vCPUs",
      "Physical Processor": "AWS Graviton Processor",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$297.84 monthly",
      "Linux Reserved cost": "$187.61 monthly"
    },
    {
      "Instance-Type": "a1.xlarge",
      "Memory": "8.0 GiB",
      "CPUs": "4 vCPUs",
      "Physical Processor": "AWS Graviton Processor",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$74.46 monthly",
      "Linux Reserved cost": "$46.93 monthly"
    },
    {
      "Instance-Type": "c1.medium",
      "Memory": "1.7 GiB",
      "CPUs": "2 vCPUs",
      "Physical Processor": "Intel Xeon Family",
      "Network Performance": "Moderate",
      "Linux On Demand cost": "$94.90 monthly",
      "Linux Reserved cost": "$66.43 monthly"
    },
    {
      "Instance-Type": "c1.xlarge",
      "Memory": "7.0 GiB",
      "CPUs": "8 vCPUs",
      "Physical Processor": "Intel Xeon Family",
      "Network Performance": "High",
      "Linux On Demand cost": "$379.60 monthly",
      "Linux Reserved cost": "$265.72 monthly"
    },
    {
      "Instance-Type": "c3.2xlarge",
      "Memory": "15.0 GiB",
      "CPUs": "8 vCPUs",
      "Physical Processor": "Intel Xeon E5-2680 v2 (Ivy Bridge)",
      "Network Performance": "High",
      "Linux On Demand cost": "$306.60 monthly",
      "Linux Reserved cost": "$213.16 monthly"
    },
    {
      "Instance-Type": "c3.4xlarge",
      "Memory": "30.0 GiB",
      "CPUs": "16 vCPUs",
      "Physical Processor": "Intel Xeon E5-2680 v2 (Ivy Bridge)",
      "Network Performance": "High",
      "Linux On Demand cost": "$613.20 monthly",
      "Linux Reserved cost": "$426.32 monthly"
    },
    {
      "Instance-Type": "c3.8xlarge",
      "Memory": "60.0 GiB",
      "CPUs": "32 vCPUs",
      "Physical Processor": "Intel Xeon E5-2680 v2 (Ivy Bridge)",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$1226.40 monthly",
      "Linux Reserved cost": "$852.64 monthly"
    },
    {
      "Instance-Type": "c3.large",
      "Memory": "3.75 GiB",
      "CPUs": "2 vCPUs",
      "Physical Processor": "Intel Xeon E5-2680 v2 (Ivy Bridge)",
      "Network Performance": "Moderate",
      "Linux On Demand cost": "$76.65 monthly",
      "Linux Reserved cost": "$53.29 monthly"
    },
    {
      "Instance-Type": "c3.xlarge",
      "Memory": "7.5 GiB",
      "CPUs": "4 vCPUs",
      "Physical Processor": "Intel Xeon E5-2680 v2 (Ivy Bridge)",
      "Network Performance": "Moderate",
      "Linux On Demand cost": "$153.30 monthly",
      "Linux Reserved cost": "$106.58 monthly"
    },
    {
      "Instance-Type": "c4.2xlarge",
      "Memory": "15.0 GiB",
      "CPUs": "8 vCPUs",
      "Physical Processor": "Intel Xeon E5-2666 v3 (Haswell)",
      "Network Performance": "High",
      "Linux On Demand cost": "$290.54 monthly",
      "Linux Reserved cost": "$183.96 monthly"
    },
    {
      "Instance-Type": "c4.4xlarge",
      "Memory": "30.0 GiB",
      "CPUs": "16 vCPUs",
      "Physical Processor": "Intel Xeon E5-2666 v3 (Haswell)",
      "Network Performance": "High",
      "Linux On Demand cost": "$581.08 monthly",
      "Linux Reserved cost": "$367.92 monthly"
    },
    {
      "Instance-Type": "c4.8xlarge",
      "Memory": "60.0 GiB",
      "CPUs": "36 vCPUs",
      "Physical Processor": "Intel Xeon E5-2666 v3 (Haswell)",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$1161.43 monthly",
      "Linux Reserved cost": "$735.84 monthly"
    },
    {
      "Instance-Type": "c4.large",
      "Memory": "3.75 GiB",
      "CPUs": "2 vCPUs",
      "Physical Processor": "Intel Xeon E5-2666 v3 (Haswell)",
      "Network Performance": "Moderate",
      "Linux On Demand cost": "$73.00 monthly",
      "Linux Reserved cost": "$45.99 monthly"
    },
    {
      "Instance-Type": "c4.xlarge",
      "Memory": "7.5 GiB",
      "CPUs": "4 vCPUs",
      "Physical Processor": "Intel Xeon E5-2666 v3 (Haswell)",
      "Network Performance": "High",
      "Linux On Demand cost": "$145.27 monthly",
      "Linux Reserved cost": "$91.98 monthly"
    },
    {
      "Instance-Type": "c5.12xlarge",
      "Memory": "96.0 GiB",
      "CPUs": "48 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8275L",
      "Network Performance": "12 Gigabit",
      "Linux On Demand cost": "$1489.20 monthly",
      "Linux Reserved cost": "$938.05 monthly"
    },
    {
      "Instance-Type": "c5.18xlarge",
      "Memory": "144.0 GiB",
      "CPUs": "72 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8124M",
      "Network Performance": "25 Gigabit",
      "Linux On Demand cost": "$2233.80 monthly",
      "Linux Reserved cost": "$1407.44 monthly"
    },
    {
      "Instance-Type": "c5.24xlarge",
      "Memory": "192.0 GiB",
      "CPUs": "96 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8275L",
      "Network Performance": "25 Gigabit",
      "Linux On Demand cost": "$2978.40 monthly",
      "Linux Reserved cost": "$1876.10 monthly"
    },
    {
      "Instance-Type": "c5.2xlarge",
      "Memory": "16.0 GiB",
      "CPUs": "8 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8124M",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$248.20 monthly",
      "Linux Reserved cost": "$156.22 monthly"
    },
    {
      "Instance-Type": "c5.4xlarge",
      "Memory": "32.0 GiB",
      "CPUs": "16 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8124M",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$496.40 monthly",
      "Linux Reserved cost": "$312.44 monthly"
    },
    {
      "Instance-Type": "c5.9xlarge",
      "Memory": "72.0 GiB",
      "CPUs": "36 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8124M",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$1116.90 monthly",
      "Linux Reserved cost": "$703.72 monthly"
    },
    {
      "Instance-Type": "c5.large",
      "Memory": "4.0 GiB",
      "CPUs": "2 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8124M",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$62.05 monthly",
      "Linux Reserved cost": "$39.42 monthly"
    },
    {
      "Instance-Type": "c5.metal",
      "Memory": "192.0 GiB",
      "CPUs": "96 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8275L",
      "Network Performance": "25 Gigabit",
      "Linux On Demand cost": "$2978.40 monthly",
      "Linux Reserved cost": "$1876.10 monthly"
    },
    {
      "Instance-Type": "c5.xlarge",
      "Memory": "8.0 GiB",
      "CPUs": "4 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8124M",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$124.10 monthly",
      "Linux Reserved cost": "$78.11 monthly"
    },
    {
      "Instance-Type": "c5d.12xlarge",
      "Memory": "96.0 GiB",
      "CPUs": "48 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8275L",
      "Network Performance": "12 Gigabit",
      "Linux On Demand cost": "$1681.92 monthly",
      "Linux Reserved cost": "$1060.69 monthly"
    },
    {
      "Instance-Type": "c5d.18xlarge",
      "Memory": "144.0 GiB",
      "CPUs": "72 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8124M",
      "Network Performance": "25 Gigabit",
      "Linux On Demand cost": "$2522.88 monthly",
      "Linux Reserved cost": "$1591.40 monthly"
    },
    {
      "Instance-Type": "c5d.24xlarge",
      "Memory": "192.0 GiB",
      "CPUs": "96 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8275L",
      "Network Performance": "25 Gigabit",
      "Linux On Demand cost": "$3363.84 monthly",
      "Linux Reserved cost": "$2121.38 monthly"
    },
    {
      "Instance-Type": "c5d.2xlarge",
      "Memory": "16.0 GiB",
      "CPUs": "8 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8124M",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$280.32 monthly",
      "Linux Reserved cost": "$176.66 monthly"
    },
    {
      "Instance-Type": "c5d.4xlarge",
      "Memory": "32.0 GiB",
      "CPUs": "16 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8124M",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$560.64 monthly",
      "Linux Reserved cost": "$353.32 monthly"
    },
    {
      "Instance-Type": "c5d.9xlarge",
      "Memory": "72.0 GiB",
      "CPUs": "36 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8124M",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$1261.44 monthly",
      "Linux Reserved cost": "$795.70 monthly"
    },
    {
      "Instance-Type": "c5d.large",
      "Memory": "4.0 GiB",
      "CPUs": "2 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8124M",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$70.08 monthly",
      "Linux Reserved cost": "$44.53 monthly"
    },
    {
      "Instance-Type": "c5d.metal",
      "Memory": "192.0 GiB",
      "CPUs": "96 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8275L",
      "Network Performance": "25 Gigabit",
      "Linux On Demand cost": "$3363.84 monthly",
      "Linux Reserved cost": "$2121.38 monthly"
    },
    {
      "Instance-Type": "c5d.xlarge",
      "Memory": "8.0 GiB",
      "CPUs": "4 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8124M",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$140.16 monthly",
      "Linux Reserved cost": "$88.33 monthly"
    },
    {
      "Instance-Type": "c5n.18xlarge",
      "Memory": "192.0 GiB",
      "CPUs": "72 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8124M",
      "Network Performance": "100 Gigabit",
      "Linux On Demand cost": "$2838.24 monthly",
      "Linux Reserved cost": "$1787.77 monthly"
    },
    {
      "Instance-Type": "c5n.2xlarge",
      "Memory": "21.0 GiB",
      "CPUs": "8 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8124M",
      "Network Performance": "Up to 25 Gigabit",
      "Linux On Demand cost": "$315.36 monthly",
      "Linux Reserved cost": "$198.56 monthly"
    },
    {
      "Instance-Type": "c5n.4xlarge",
      "Memory": "42.0 GiB",
      "CPUs": "16 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8124M",
      "Network Performance": "Up to 25 Gigabit",
      "Linux On Demand cost": "$630.72 monthly",
      "Linux Reserved cost": "$397.12 monthly"
    },
    {
      "Instance-Type": "c5n.9xlarge",
      "Memory": "96.0 GiB",
      "CPUs": "36 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8124M",
      "Network Performance": "50 Gigabit",
      "Linux On Demand cost": "$1419.12 monthly",
      "Linux Reserved cost": "$894.25 monthly"
    },
    {
      "Instance-Type": "c5n.large",
      "Memory": "5.25 GiB",
      "CPUs": "2 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8124M",
      "Network Performance": "Up to 25 Gigabit",
      "Linux On Demand cost": "$78.84 monthly",
      "Linux Reserved cost": "$49.64 monthly"
    },
    {
      "Instance-Type": "c5n.metal",
      "Memory": "192.0 GiB",
      "CPUs": "72 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8124M",
      "Network Performance": "100 Gigabit",
      "Linux On Demand cost": "$2838.24 monthly",
      "Linux Reserved cost": "$1787.77 monthly"
    },
    {
      "Instance-Type": "c5n.xlarge",
      "Memory": "10.5 GiB",
      "CPUs": "4 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8124M",
      "Network Performance": "Up to 25 Gigabit",
      "Linux On Demand cost": "$157.68 monthly",
      "Linux Reserved cost": "$99.28 monthly"
    },
    {
      "Instance-Type": "cc2.8xlarge",
      "Memory": "60.5 GiB",
      "CPUs": "32 vCPUs",
      "Physical Processor": "Intel Xeon E5-2670",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$1460.00 monthly",
      "Linux Reserved cost": "unavailable"
    },
    {
      "Instance-Type": "cr1.8xlarge",
      "Memory": "244.0 GiB",
      "CPUs": "32 vCPUs",
      "Physical Processor": "Intel Xeon E5-2670",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$2555.00 monthly",
      "Linux Reserved cost": "unavailable"
    },
    {
      "Instance-Type": "d2.2xlarge",
      "Memory": "61.0 GiB",
      "CPUs": "8 vCPUs",
      "Physical Processor": "Intel Xeon E5-2676v3 (Haswell)",
      "Network Performance": "High",
      "Linux On Demand cost": "$1007.40 monthly",
      "Linux Reserved cost": "$586.92 monthly"
    },
    {
      "Instance-Type": "d2.4xlarge",
      "Memory": "122.0 GiB",
      "CPUs": "16 vCPUs",
      "Physical Processor": "Intel Xeon E5-2676v3 (Haswell)",
      "Network Performance": "High",
      "Linux On Demand cost": "$2014.80 monthly",
      "Linux Reserved cost": "$1173.84 monthly"
    },
    {
      "Instance-Type": "d2.8xlarge",
      "Memory": "244.0 GiB",
      "CPUs": "36 vCPUs",
      "Physical Processor": "Intel Xeon E5-2676v3 (Haswell)",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$4029.60 monthly",
      "Linux Reserved cost": "$2347.68 monthly"
    },
    {
      "Instance-Type": "d2.xlarge",
      "Memory": "30.5 GiB",
      "CPUs": "4 vCPUs",
      "Physical Processor": "Intel Xeon E5-2676v3 (Haswell)",
      "Network Performance": "Moderate",
      "Linux On Demand cost": "$503.70 monthly",
      "Linux Reserved cost": "$293.46 monthly"
    },
    {
      "Instance-Type": "f1.16xlarge",
      "Memory": "976.0 GiB",
      "CPUs": "64 vCPUs",
      "Physical Processor": "Intel Xeon E5-2686 v4 (Broadwell)",
      "Network Performance": "20 Gigabit",
      "Linux On Demand cost": "$9636.00 monthly",
      "Linux Reserved cost": "$6515.25 monthly"
    },
    {
      "Instance-Type": "f1.2xlarge",
      "Memory": "122.0 GiB",
      "CPUs": "8 vCPUs",
      "Physical Processor": "Intel Xeon E5-2686 v4 (Broadwell)",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$1204.50 monthly",
      "Linux Reserved cost": "$814.68 monthly"
    },
    {
      "Instance-Type": "f1.4xlarge",
      "Memory": "244.0 GiB",
      "CPUs": "16 vCPUs",
      "Physical Processor": "Intel Xeon E5-2686 v4 (Broadwell)",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$2409.00 monthly",
      "Linux Reserved cost": "$1628.63 monthly"
    },
    {
      "Instance-Type": "g2.2xlarge",
      "Memory": "15.0 GiB",
      "CPUs": "8 vCPUs",
      "Physical Processor": "Intel Xeon E5-2670 (Sandy Bridge)",
      "Network Performance": "High",
      "Linux On Demand cost": "$474.50 monthly",
      "Linux Reserved cost": "$346.02 monthly"
    },
    {
      "Instance-Type": "g2.8xlarge",
      "Memory": "60.0 GiB",
      "CPUs": "32 vCPUs",
      "Physical Processor": "Intel Xeon E5-2670 (Sandy Bridge)",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$1898.00 monthly",
      "Linux Reserved cost": "$1384.08 monthly"
    },
    {
      "Instance-Type": "g3.16xlarge",
      "Memory": "488.0 GiB",
      "CPUs": "64 vCPUs",
      "Physical Processor": "Intel Xeon E5-2686 v4 (Broadwell)",
      "Network Performance": "20 Gigabit",
      "Linux On Demand cost": "$3328.80 monthly",
      "Linux Reserved cost": "$2271.906000 monthly"
    },
    {
      "Instance-Type": "g3.4xlarge",
      "Memory": "122.0 GiB",
      "CPUs": "16 vCPUs",
      "Physical Processor": "Intel Xeon E5-2686 v4 (Broadwell)",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$832.20 monthly",
      "Linux Reserved cost": "$568.01 monthly"
    },
    {
      "Instance-Type": "g3.8xlarge",
      "Memory": "244.0 GiB",
      "CPUs": "32 vCPUs",
      "Physical Processor": "Intel Xeon E5-2686 v4 (Broadwell)",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$1664.40 monthly",
      "Linux Reserved cost": "$1135.95 monthly"
    },
    {
      "Instance-Type": "g3s.xlarge",
      "Memory": "30.5 GiB",
      "CPUs": "4 vCPUs",
      "Physical Processor": "Intel Xeon E5-2686 v4 (Broadwell)",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$547.50 monthly",
      "Linux Reserved cost": "$402.23 monthly"
    },
    {
      "Instance-Type": "g4dn.12xlarge",
      "Memory": "192.0 GiB",
      "CPUs": "48 vCPUs",
      "Physical Processor": "Intel Xeon Family",
      "Network Performance": "50 Gigabit",
      "Linux On Demand cost": "$2855.76 monthly",
      "Linux Reserved cost": "$1799.45 monthly"
    },
    {
      "Instance-Type": "g4dn.16xlarge",
      "Memory": "256.0 GiB",
      "CPUs": "64 vCPUs",
      "Physical Processor": "Intel Xeon Family",
      "Network Performance": "50 Gigabit",
      "Linux On Demand cost": "$3176.96 monthly",
      "Linux Reserved cost": "$2001.66 monthly"
    },
    {
      "Instance-Type": "g4dn.2xlarge",
      "Memory": "32.0 GiB",
      "CPUs": "8 vCPUs",
      "Physical Processor": "Intel Xeon Family",
      "Network Performance": "Up to 25 Gigabit",
      "Linux On Demand cost": "$548.96 monthly",
      "Linux Reserved cost": "$346.02 monthly"
    },
    {
      "Instance-Type": "g4dn.4xlarge",
      "Memory": "64.0 GiB",
      "CPUs": "16 vCPUs",
      "Physical Processor": "Intel Xeon Family",
      "Network Performance": "Up to 25 Gigabit",
      "Linux On Demand cost": "$878.92 monthly",
      "Linux Reserved cost": "$554.07 monthly"
    },
    {
      "Instance-Type": "g4dn.8xlarge",
      "Memory": "128.0 GiB",
      "CPUs": "32 vCPUs",
      "Physical Processor": "Intel Xeon Family",
      "Network Performance": "50 Gigabit",
      "Linux On Demand cost": "$1588.48 monthly",
      "Linux Reserved cost": "$1000.83 monthly"
    },
    {
      "Instance-Type": "g4dn.metal",
      "Memory": "384.0 GiB",
      "CPUs": "96 vCPUs",
      "Physical Processor": "Intel Xeon Family",
      "Network Performance": "100 Gigabit",
      "Linux On Demand cost": "unavailable",
      "Linux Reserved cost": "unavailable"
    },
    {
      "Instance-Type": "g4dn.xlarge",
      "Memory": "16.0 GiB",
      "CPUs": "4 vCPUs",
      "Physical Processor": "Intel Xeon Family",
      "Network Performance": "Up to 25 Gigabit",
      "Linux On Demand cost": "$383.98 monthly",
      "Linux Reserved cost": "$241.63 monthly"
    },
    {
      "Instance-Type": "h1.16xlarge",
      "Memory": "256.0 GiB",
      "CPUs": "64 vCPUs",
      "Physical Processor": "Intel Xeon E5-2686 v4 (Broadwell)",
      "Network Performance": "25 Gigabit",
      "Linux On Demand cost": "$2733.12 monthly",
      "Linux Reserved cost": "$1857.85 monthly"
    },
    {
      "Instance-Type": "h1.2xlarge",
      "Memory": "32.0 GiB",
      "CPUs": "8 vCPUs",
      "Physical Processor": "Intel Xeon E5-2686 v4 (Broadwell)",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$341.64 monthly",
      "Linux Reserved cost": "$232.14 monthly"
    },
    {
      "Instance-Type": "h1.4xlarge",
      "Memory": "64.0 GiB",
      "CPUs": "16 vCPUs",
      "Physical Processor": "Intel Xeon E5-2686 v4 (Broadwell)",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$683.28 monthly",
      "Linux Reserved cost": "$464.28 monthly"
    },
    {
      "Instance-Type": "h1.8xlarge",
      "Memory": "128.0 GiB",
      "CPUs": "32 vCPUs",
      "Physical Processor": "Intel Xeon E5-2686 v4 (Broadwell)",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$1366.56 monthly",
      "Linux Reserved cost": "$928.56 monthly"
    },
    {
      "Instance-Type": "hs1.8xlarge",
      "Memory": "117.0 GiB",
      "CPUs": "17 vCPUs",
      "Physical Processor": "Intel Xeon E5-2650",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$3358.00 monthly",
      "Linux Reserved cost": "unavailable"
    },
    {
      "Instance-Type": "i2.2xlarge",
      "Memory": "61.0 GiB",
      "CPUs": "8 vCPUs",
      "Physical Processor": "Intel Xeon E5-2670 v2 (Ivy Bridge)",
      "Network Performance": "High",
      "Linux On Demand cost": "$1244.65 monthly",
      "Linux Reserved cost": "$619.04 monthly"
    },
    {
      "Instance-Type": "i2.4xlarge",
      "Memory": "122.0 GiB",
      "CPUs": "16 vCPUs",
      "Physical Processor": "Intel Xeon E5-2670 v2 (Ivy Bridge)",
      "Network Performance": "High",
      "Linux On Demand cost": "$2489.30 monthly",
      "Linux Reserved cost": "$1238.08 monthly"
    },
    {
      "Instance-Type": "i2.8xlarge",
      "Memory": "244.0 GiB",
      "CPUs": "32 vCPUs",
      "Physical Processor": "Intel Xeon E5-2670 v2 (Ivy Bridge)",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$4978.60 monthly",
      "Linux Reserved cost": "$2476.16 monthly"
    },
    {
      "Instance-Type": "i2.xlarge",
      "Memory": "30.5 GiB",
      "CPUs": "4 vCPUs",
      "Physical Processor": "Intel Xeon E5-2670 v2 (Ivy Bridge)",
      "Network Performance": "Moderate",
      "Linux On Demand cost": "$622.69 monthly",
      "Linux Reserved cost": "$309.52 monthly"
    },
    {
      "Instance-Type": "i3.16xlarge",
      "Memory": "488.0 GiB",
      "CPUs": "64 vCPUs",
      "Physical Processor": "Intel Xeon E5-2686 v4 (Broadwell)",
      "Network Performance": "20 Gigabit",
      "Linux On Demand cost": "$3644.16 monthly",
      "Linux Reserved cost": "$2501.71 monthly"
    },
    {
      "Instance-Type": "i3.2xlarge",
      "Memory": "61.0 GiB",
      "CPUs": "8 vCPUs",
      "Physical Processor": "Intel Xeon E5-2686 v4 (Broadwell)",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$455.52 monthly",
      "Linux Reserved cost": "$312.44 monthly"
    },
    {
      "Instance-Type": "i3.4xlarge",
      "Memory": "122.0 GiB",
      "CPUs": "16 vCPUs",
      "Physical Processor": "Intel Xeon E5-2686 v4 (Broadwell)",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$911.04 monthly",
      "Linux Reserved cost": "$625.61 monthly"
    },
    {
      "Instance-Type": "i3.8xlarge",
      "Memory": "244.0 GiB",
      "CPUs": "32 vCPUs",
      "Physical Processor": "Intel Xeon E5-2686 v4 (Broadwell)",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$1822.08 monthly",
      "Linux Reserved cost": "$1251.22 monthly"
    },
    {
      "Instance-Type": "i3.large",
      "Memory": "15.25 GiB",
      "CPUs": "2 vCPUs",
      "Physical Processor": "Intel Xeon E5-2686 v4 (Broadwell)",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$113.88 monthly",
      "Linux Reserved cost": "$78.11 monthly"
    },
    {
      "Instance-Type": "i3.metal",
      "Memory": "512.0 GiB",
      "CPUs": "72 vCPUs",
      "Physical Processor": "Intel Xeon E5-2686 v4 (Broadwell)",
      "Network Performance": "25 Gigabit",
      "Linux On Demand cost": "$3644.16 monthly",
      "Linux Reserved cost": "$2501.71 monthly"
    },
    {
      "Instance-Type": "i3.xlarge",
      "Memory": "30.5 GiB",
      "CPUs": "4 vCPUs",
      "Physical Processor": "Intel Xeon E5-2686 v4 (Broadwell)",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$227.76 monthly",
      "Linux Reserved cost": "$156.22 monthly"
    },
    {
      "Instance-Type": "i3en.12xlarge",
      "Memory": "384.0 GiB",
      "CPUs": "48 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "50 Gigabit",
      "Linux On Demand cost": "$3959.52 monthly",
      "Linux Reserved cost": "$2696.62 monthly"
    },
    {
      "Instance-Type": "i3en.24xlarge",
      "Memory": "768.0 GiB",
      "CPUs": "96 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "100 Gigabit",
      "Linux On Demand cost": "$7919.04 monthly",
      "Linux Reserved cost": "$5393.24 monthly"
    },
    {
      "Instance-Type": "i3en.2xlarge",
      "Memory": "64.0 GiB",
      "CPUs": "8 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "Up to 25 Gigabit",
      "Linux On Demand cost": "$659.92 monthly",
      "Linux Reserved cost": "$449.68 monthly"
    },
    {
      "Instance-Type": "i3en.3xlarge",
      "Memory": "96.0 GiB",
      "CPUs": "12 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "Up to 25 Gigabit",
      "Linux On Demand cost": "$989.88 monthly",
      "Linux Reserved cost": "$674.52 monthly"
    },
    {
      "Instance-Type": "i3en.6xlarge",
      "Memory": "192.0 GiB",
      "CPUs": "24 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "25 Gigabit",
      "Linux On Demand cost": "$1979.76 monthly",
      "Linux Reserved cost": "$1348.31 monthly"
    },
    {
      "Instance-Type": "i3en.large",
      "Memory": "16.0 GiB",
      "CPUs": "2 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "Up to 25 Gigabit",
      "Linux On Demand cost": "$164.98 monthly",
      "Linux Reserved cost": "$112.42 monthly"
    },
    {
      "Instance-Type": "i3en.metal",
      "Memory": "768.0 GiB",
      "CPUs": "96 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "100 Gigabit",
      "Linux On Demand cost": "$7919.04 monthly",
      "Linux Reserved cost": "$5393.24 monthly"
    },
    {
      "Instance-Type": "i3en.xlarge",
      "Memory": "32.0 GiB",
      "CPUs": "4 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "Up to 25 Gigabit",
      "Linux On Demand cost": "$329.96 monthly",
      "Linux Reserved cost": "$224.84 monthly"
    },
    {
      "Instance-Type": "m1.large",
      "Memory": "7.5 GiB",
      "CPUs": "2 vCPUs",
      "Physical Processor": "Intel Xeon Family",
      "Network Performance": "Moderate",
      "Linux On Demand cost": "$127.75 monthly",
      "Linux Reserved cost": "$81.76 monthly"
    },
    {
      "Instance-Type": "m1.medium",
      "Memory": "3.75 GiB",
      "CPUs": "1 vCPUs",
      "Physical Processor": "Intel Xeon Family",
      "Network Performance": "Moderate",
      "Linux On Demand cost": "$63.51 monthly",
      "Linux Reserved cost": "$40.88 monthly"
    },
    {
      "Instance-Type": "m1.small",
      "Memory": "1.7 GiB",
      "CPUs": "1 vCPUs",
      "Physical Processor": "Intel Xeon Family",
      "Network Performance": "Low",
      "Linux On Demand cost": "$32.12 monthly",
      "Linux Reserved cost": "$20.44 monthly"
    },
    {
      "Instance-Type": "m1.xlarge",
      "Memory": "15.0 GiB",
      "CPUs": "4 vCPUs",
      "Physical Processor": "Intel Xeon Family",
      "Network Performance": "High",
      "Linux On Demand cost": "$255.50 monthly",
      "Linux Reserved cost": "$163.52 monthly"
    },
    {
      "Instance-Type": "m2.2xlarge",
      "Memory": "34.2 GiB",
      "CPUs": "4 vCPUs",
      "Physical Processor": "Intel Xeon Family",
      "Network Performance": "Moderate",
      "Linux On Demand cost": "$357.70 monthly",
      "Linux Reserved cost": "$162.06 monthly"
    },
    {
      "Instance-Type": "m2.4xlarge",
      "Memory": "68.4 GiB",
      "CPUs": "8 vCPUs",
      "Physical Processor": "Intel Xeon Family",
      "Network Performance": "High",
      "Linux On Demand cost": "$715.40 monthly",
      "Linux Reserved cost": "$324.12 monthly"
    },
    {
      "Instance-Type": "m2.xlarge",
      "Memory": "17.1 GiB",
      "CPUs": "2 vCPUs",
      "Physical Processor": "Intel Xeon Family",
      "Network Performance": "Moderate",
      "Linux On Demand cost": "$178.85 monthly",
      "Linux Reserved cost": "$81.03 monthly"
    },
    {
      "Instance-Type": "m3.2xlarge",
      "Memory": "30.0 GiB",
      "CPUs": "8 vCPUs",
      "Physical Processor": "Intel Xeon E5-2670 v2 (Ivy Bridge/Sandy Bridge)",
      "Network Performance": "High",
      "Linux On Demand cost": "$388.36 monthly",
      "Linux Reserved cost": "$277.40 monthly"
    },
    {
      "Instance-Type": "m3.large",
      "Memory": "7.5 GiB",
      "CPUs": "2 vCPUs",
      "Physical Processor": "Intel Xeon E5-2670 v2 (Ivy Bridge/Sandy Bridge)",
      "Network Performance": "Moderate",
      "Linux On Demand cost": "$97.09 monthly",
      "Linux Reserved cost": "$69.35 monthly"
    },
    {
      "Instance-Type": "m3.medium",
      "Memory": "3.75 GiB",
      "CPUs": "1 vCPUs",
      "Physical Processor": "Intel Xeon E5-2670 v2 (Ivy Bridge/Sandy Bridge)",
      "Network Performance": "Moderate",
      "Linux On Demand cost": "$48.91 monthly",
      "Linux Reserved cost": "$35.04 monthly"
    },
    {
      "Instance-Type": "m3.xlarge",
      "Memory": "15.0 GiB",
      "CPUs": "4 vCPUs",
      "Physical Processor": "Intel Xeon E5-2670 v2 (Ivy Bridge/Sandy Bridge)",
      "Network Performance": "High",
      "Linux On Demand cost": "$194.18 monthly",
      "Linux Reserved cost": "$138.70 monthly"
    },
    {
      "Instance-Type": "m4.10xlarge",
      "Memory": "160.0 GiB",
      "CPUs": "40 vCPUs",
      "Physical Processor": "Intel Xeon E5-2676 v3 (Haswell)",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$1460.00 monthly",
      "Linux Reserved cost": "$904.47 monthly"
    },
    {
      "Instance-Type": "m4.16xlarge",
      "Memory": "256.0 GiB",
      "CPUs": "64 vCPUs",
      "Physical Processor": "Intel Xeon E5-2686 v4 (Broadwell)",
      "Network Performance": "20 Gigabit",
      "Linux On Demand cost": "$2336.00 monthly",
      "Linux Reserved cost": "$1447.15 monthly"
    },
    {
      "Instance-Type": "m4.2xlarge",
      "Memory": "32.0 GiB",
      "CPUs": "8 vCPUs",
      "Physical Processor": "Intel Xeon E5-2676 v3 (Haswell)",
      "Network Performance": "High",
      "Linux On Demand cost": "$292.00 monthly",
      "Linux Reserved cost": "$180.894000 monthly"
    },
    {
      "Instance-Type": "m4.4xlarge",
      "Memory": "64.0 GiB",
      "CPUs": "16 vCPUs",
      "Physical Processor": "Intel Xeon E5-2676 v3 (Haswell)",
      "Network Performance": "High",
      "Linux On Demand cost": "$584.00 monthly",
      "Linux Reserved cost": "$361.788000 monthly"
    },
    {
      "Instance-Type": "m4.large",
      "Memory": "8.0 GiB",
      "CPUs": "2 vCPUs",
      "Physical Processor": "Intel Xeon E5-2676 v3 (Haswell)",
      "Network Performance": "Moderate",
      "Linux On Demand cost": "$73.00 monthly",
      "Linux Reserved cost": "$45.26 monthly"
    },
    {
      "Instance-Type": "m4.xlarge",
      "Memory": "16.0 GiB",
      "CPUs": "4 vCPUs",
      "Physical Processor": "Intel Xeon E5-2676 v3 (Haswell)",
      "Network Performance": "High",
      "Linux On Demand cost": "$146.00 monthly",
      "Linux Reserved cost": "$90.447000 monthly"
    },
    {
      "Instance-Type": "m5.12xlarge",
      "Memory": "192.0 GiB",
      "CPUs": "48 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$1681.92 monthly",
      "Linux Reserved cost": "$1074.56 monthly"
    },
    {
      "Instance-Type": "m5.16xlarge",
      "Memory": "256.0 GiB",
      "CPUs": "64 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "20 Gigabit",
      "Linux On Demand cost": "$2242.56 monthly",
      "Linux Reserved cost": "$1432.99 monthly"
    },
    {
      "Instance-Type": "m5.24xlarge",
      "Memory": "384.0 GiB",
      "CPUs": "96 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "25 Gigabit",
      "Linux On Demand cost": "$3363.84 monthly",
      "Linux Reserved cost": "$2149.12 monthly"
    },
    {
      "Instance-Type": "m5.2xlarge",
      "Memory": "32.0 GiB",
      "CPUs": "8 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$280.32 monthly",
      "Linux Reserved cost": "$178.85 monthly"
    },
    {
      "Instance-Type": "m5.4xlarge",
      "Memory": "64.0 GiB",
      "CPUs": "16 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$560.64 monthly",
      "Linux Reserved cost": "$358.43 monthly"
    },
    {
      "Instance-Type": "m5.8xlarge",
      "Memory": "128.0 GiB",
      "CPUs": "32 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$1121.28 monthly",
      "Linux Reserved cost": "$716.13 monthly"
    },
    {
      "Instance-Type": "m5.large",
      "Memory": "8.0 GiB",
      "CPUs": "2 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$70.08 monthly",
      "Linux Reserved cost": "$44.53 monthly"
    },
    {
      "Instance-Type": "m5.metal",
      "Memory": "384.0 GiB",
      "CPUs": "96 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "25 Gigabit",
      "Linux On Demand cost": "$3363.84 monthly",
      "Linux Reserved cost": "$2149.12 monthly"
    },
    {
      "Instance-Type": "m5.xlarge",
      "Memory": "16.0 GiB",
      "CPUs": "4 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$140.16 monthly",
      "Linux Reserved cost": "$89.79 monthly"
    },
    {
      "Instance-Type": "m5a.12xlarge",
      "Memory": "192.0 GiB",
      "CPUs": "48 vCPUs",
      "Physical Processor": "AMD EPYC 7571",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$1506.72 monthly",
      "Linux Reserved cost": "$958.49 monthly"
    },
    {
      "Instance-Type": "m5a.16xlarge",
      "Memory": "256.0 GiB",
      "CPUs": "64 vCPUs",
      "Physical Processor": "AMD EPYC 7571",
      "Network Performance": "12 Gigabit",
      "Linux On Demand cost": "$2008.96 monthly",
      "Linux Reserved cost": "$1278.23 monthly"
    },
    {
      "Instance-Type": "m5a.24xlarge",
      "Memory": "384.0 GiB",
      "CPUs": "96 vCPUs",
      "Physical Processor": "AMD EPYC 7571",
      "Network Performance": "20 Gigabit",
      "Linux On Demand cost": "$3013.44 monthly",
      "Linux Reserved cost": "$1917.71 monthly"
    },
    {
      "Instance-Type": "m5a.2xlarge",
      "Memory": "32.0 GiB",
      "CPUs": "8 vCPUs",
      "Physical Processor": "AMD EPYC 7571",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$251.12 monthly",
      "Linux Reserved cost": "$159.87 monthly"
    },
    {
      "Instance-Type": "m5a.4xlarge",
      "Memory": "64.0 GiB",
      "CPUs": "16 vCPUs",
      "Physical Processor": "AMD EPYC 7571",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$502.24 monthly",
      "Linux Reserved cost": "$319.74 monthly"
    },
    {
      "Instance-Type": "m5a.8xlarge",
      "Memory": "128.0 GiB",
      "CPUs": "32 vCPUs",
      "Physical Processor": "AMD EPYC 7571",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$1004.48 monthly",
      "Linux Reserved cost": "$639.48 monthly"
    },
    {
      "Instance-Type": "m5a.large",
      "Memory": "8.0 GiB",
      "CPUs": "2 vCPUs",
      "Physical Processor": "AMD EPYC 7571",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$62.78 monthly",
      "Linux Reserved cost": "$40.15 monthly"
    },
    {
      "Instance-Type": "m5a.xlarge",
      "Memory": "16.0 GiB",
      "CPUs": "4 vCPUs",
      "Physical Processor": "AMD EPYC 7571",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$125.56 monthly",
      "Linux Reserved cost": "$79.57 monthly"
    },
    {
      "Instance-Type": "m5ad.12xlarge",
      "Memory": "192.0 GiB",
      "CPUs": "48 vCPUs",
      "Physical Processor": "AMD EPYC 7571",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$1804.56 monthly",
      "Linux Reserved cost": "$1154.13 monthly"
    },
    {
      "Instance-Type": "m5ad.24xlarge",
      "Memory": "384.0 GiB",
      "CPUs": "96 vCPUs",
      "Physical Processor": "AMD EPYC 7571",
      "Network Performance": "20 Gigabit",
      "Linux On Demand cost": "$3609.12 monthly",
      "Linux Reserved cost": "$2307.53 monthly"
    },
    {
      "Instance-Type": "m5ad.2xlarge",
      "Memory": "32.0 GiB",
      "CPUs": "8 vCPUs",
      "Physical Processor": "AMD EPYC 7571",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$300.76 monthly",
      "Linux Reserved cost": "$191.99 monthly"
    },
    {
      "Instance-Type": "m5ad.4xlarge",
      "Memory": "64.0 GiB",
      "CPUs": "16 vCPUs",
      "Physical Processor": "AMD EPYC 7571",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$601.52 monthly",
      "Linux Reserved cost": "$384.71 monthly"
    },
    {
      "Instance-Type": "m5ad.large",
      "Memory": "8.0 GiB",
      "CPUs": "2 vCPUs",
      "Physical Processor": "AMD EPYC 7571",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$75.19 monthly",
      "Linux Reserved cost": "$48.18 monthly"
    },
    {
      "Instance-Type": "m5ad.xlarge",
      "Memory": "16.0 GiB",
      "CPUs": "4 vCPUs",
      "Physical Processor": "AMD EPYC 7571",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$150.38 monthly",
      "Linux Reserved cost": "$96.36 monthly"
    },
    {
      "Instance-Type": "m5d.12xlarge",
      "Memory": "192.0 GiB",
      "CPUs": "48 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$1979.76 monthly",
      "Linux Reserved cost": "$1260.71 monthly"
    },
    {
      "Instance-Type": "m5d.16xlarge",
      "Memory": "256.0 GiB",
      "CPUs": "64 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "20 Gigabit",
      "Linux On Demand cost": "$2639.68 monthly",
      "Linux Reserved cost": "$1680.46 monthly"
    },
    {
      "Instance-Type": "m5d.24xlarge",
      "Memory": "384.0 GiB",
      "CPUs": "96 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "25 Gigabit",
      "Linux On Demand cost": "$3959.52 monthly",
      "Linux Reserved cost": "$2521.42 monthly"
    },
    {
      "Instance-Type": "m5d.2xlarge",
      "Memory": "32.0 GiB",
      "CPUs": "8 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$329.96 monthly",
      "Linux Reserved cost": "$210.24 monthly"
    },
    {
      "Instance-Type": "m5d.4xlarge",
      "Memory": "64.0 GiB",
      "CPUs": "16 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$659.92 monthly",
      "Linux Reserved cost": "$420.48 monthly"
    },
    {
      "Instance-Type": "m5d.8xlarge",
      "Memory": "128.0 GiB",
      "CPUs": "32 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$1319.84 monthly",
      "Linux Reserved cost": "$840.23 monthly"
    },
    {
      "Instance-Type": "m5d.large",
      "Memory": "8.0 GiB",
      "CPUs": "2 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$82.49 monthly",
      "Linux Reserved cost": "$52.56 monthly"
    },
    {
      "Instance-Type": "m5d.metal",
      "Memory": "384.0 GiB",
      "CPUs": "96 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "25 Gigabit",
      "Linux On Demand cost": "$3959.52 monthly",
      "Linux Reserved cost": "$2521.42 monthly"
    },
    {
      "Instance-Type": "m5d.xlarge",
      "Memory": "16.0 GiB",
      "CPUs": "4 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$164.98 monthly",
      "Linux Reserved cost": "$105.12 monthly"
    },
    {
      "Instance-Type": "m5dn.12xlarge",
      "Memory": "192.0 GiB",
      "CPUs": "48 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8259 (Cascade Lake)",
      "Network Performance": "50 Gigabit",
      "Linux On Demand cost": "$2382.72 monthly",
      "Linux Reserved cost": "$1516.21 monthly"
    },
    {
      "Instance-Type": "m5dn.16xlarge",
      "Memory": "256.0 GiB",
      "CPUs": "64 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8259 (Cascade Lake)",
      "Network Performance": "75 Gigabit",
      "Linux On Demand cost": "$3176.96 monthly",
      "Linux Reserved cost": "$2021.37 monthly"
    },
    {
      "Instance-Type": "m5dn.24xlarge",
      "Memory": "384.0 GiB",
      "CPUs": "96 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8259 (Cascade Lake)",
      "Network Performance": "100 Gigabit",
      "Linux On Demand cost": "$4765.44 monthly",
      "Linux Reserved cost": "$3032.42 monthly"
    },
    {
      "Instance-Type": "m5dn.2xlarge",
      "Memory": "32.0 GiB",
      "CPUs": "8 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8259 (Cascade Lake)",
      "Network Performance": "Up to 25 Gigabit",
      "Linux On Demand cost": "$397.12 monthly",
      "Linux Reserved cost": "$252.58 monthly"
    },
    {
      "Instance-Type": "m5dn.4xlarge",
      "Memory": "64.0 GiB",
      "CPUs": "16 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8259 (Cascade Lake)",
      "Network Performance": "Up to 25 Gigabit",
      "Linux On Demand cost": "$794.24 monthly",
      "Linux Reserved cost": "$505.16 monthly"
    },
    {
      "Instance-Type": "m5dn.8xlarge",
      "Memory": "128.0 GiB",
      "CPUs": "32 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8259 (Cascade Lake)",
      "Network Performance": "25 Gigabit",
      "Linux On Demand cost": "$1588.48 monthly",
      "Linux Reserved cost": "$1011.05 monthly"
    },
    {
      "Instance-Type": "m5dn.large",
      "Memory": "8.0 GiB",
      "CPUs": "2 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8259 (Cascade Lake)",
      "Network Performance": "Up to 25 Gigabit",
      "Linux On Demand cost": "$99.28 monthly",
      "Linux Reserved cost": "$63.51 monthly"
    },
    {
      "Instance-Type": "m5dn.metal",
      "Memory": "384.0 GiB",
      "CPUs": "96 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8259 (Cascade Lake)",
      "Network Performance": "100 Gigabit",
      "Linux On Demand cost": "unavailable",
      "Linux Reserved cost": "unavailable"
    },
    {
      "Instance-Type": "m5dn.xlarge",
      "Memory": "16.0 GiB",
      "CPUs": "4 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8259 (Cascade Lake)",
      "Network Performance": "Up to 25 Gigabit",
      "Linux On Demand cost": "$198.56 monthly",
      "Linux Reserved cost": "$126.29 monthly"
    },
    {
      "Instance-Type": "m5n.12xlarge",
      "Memory": "192.0 GiB",
      "CPUs": "48 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8259 (Cascade Lake)",
      "Network Performance": "50 Gigabit",
      "Linux On Demand cost": "$2084.88 monthly",
      "Linux Reserved cost": "$1324.22 monthly"
    },
    {
      "Instance-Type": "m5n.16xlarge",
      "Memory": "256.0 GiB",
      "CPUs": "64 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8259 (Cascade Lake)",
      "Network Performance": "75 Gigabit",
      "Linux On Demand cost": "$2779.84 monthly",
      "Linux Reserved cost": "$1765.87 monthly"
    },
    {
      "Instance-Type": "m5n.24xlarge",
      "Memory": "384.0 GiB",
      "CPUs": "96 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8259 (Cascade Lake)",
      "Network Performance": "100 Gigabit",
      "Linux On Demand cost": "$4169.76 monthly",
      "Linux Reserved cost": "$2649.17 monthly"
    },
    {
      "Instance-Type": "m5n.2xlarge",
      "Memory": "32.0 GiB",
      "CPUs": "8 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8259 (Cascade Lake)",
      "Network Performance": "Up to 25 Gigabit",
      "Linux On Demand cost": "$347.48 monthly",
      "Linux Reserved cost": "$220.46 monthly"
    },
    {
      "Instance-Type": "m5n.4xlarge",
      "Memory": "64.0 GiB",
      "CPUs": "16 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8259 (Cascade Lake)",
      "Network Performance": "Up to 25 Gigabit",
      "Linux On Demand cost": "$694.96 monthly",
      "Linux Reserved cost": "$441.65 monthly"
    },
    {
      "Instance-Type": "m5n.8xlarge",
      "Memory": "128.0 GiB",
      "CPUs": "32 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8259 (Cascade Lake)",
      "Network Performance": "25 Gigabit",
      "Linux On Demand cost": "$1389.92 monthly",
      "Linux Reserved cost": "$883.30 monthly"
    },
    {
      "Instance-Type": "m5n.large",
      "Memory": "8.0 GiB",
      "CPUs": "2 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8259 (Cascade Lake)",
      "Network Performance": "Up to 25 Gigabit",
      "Linux On Demand cost": "$86.87 monthly",
      "Linux Reserved cost": "$55.48 monthly"
    },
    {
      "Instance-Type": "m5n.metal",
      "Memory": "384.0 GiB",
      "CPUs": "96 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8259 (Cascade Lake)",
      "Network Performance": "100 Gigabit",
      "Linux On Demand cost": "unavailable",
      "Linux Reserved cost": "unavailable"
    },
    {
      "Instance-Type": "m5n.xlarge",
      "Memory": "16.0 GiB",
      "CPUs": "4 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8259 (Cascade Lake)",
      "Network Performance": "Up to 25 Gigabit",
      "Linux On Demand cost": "$173.74 monthly",
      "Linux Reserved cost": "$110.23 monthly"
    },
    {
      "Instance-Type": "p2.16xlarge",
      "Memory": "768.0 GiB",
      "CPUs": "64 vCPUs",
      "Physical Processor": "Intel Xeon E5-2686 v4 (Broadwell)",
      "Network Performance": "20 Gigabit",
      "Linux On Demand cost": "$10512.00 monthly",
      "Linux Reserved cost": "$7174.44 monthly"
    },
    {
      "Instance-Type": "p2.8xlarge",
      "Memory": "488.0 GiB",
      "CPUs": "32 vCPUs",
      "Physical Processor": "Intel Xeon E5-2686 v4 (Broadwell)",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$5256.00 monthly",
      "Linux Reserved cost": "$3587.22 monthly"
    },
    {
      "Instance-Type": "p2.xlarge",
      "Memory": "61.0 GiB",
      "CPUs": "4 vCPUs",
      "Physical Processor": "Intel Xeon E5-2686 v4 (Broadwell)",
      "Network Performance": "High",
      "Linux On Demand cost": "$657.00 monthly",
      "Linux Reserved cost": "$448.22 monthly"
    },
    {
      "Instance-Type": "p3.16xlarge",
      "Memory": "488.0 GiB",
      "CPUs": "64 vCPUs",
      "Physical Processor": "Intel Xeon E5-2686 v4 (Broadwell)",
      "Network Performance": "25 Gigabit",
      "Linux On Demand cost": "$17870.40 monthly",
      "Linux Reserved cost": "$12196.84 monthly"
    },
    {
      "Instance-Type": "p3.2xlarge",
      "Memory": "61.0 GiB",
      "CPUs": "8 vCPUs",
      "Physical Processor": "Intel Xeon E5-2686 v4 (Broadwell)",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$2233.80 monthly",
      "Linux Reserved cost": "$1524.24 monthly"
    },
    {
      "Instance-Type": "p3.8xlarge",
      "Memory": "244.0 GiB",
      "CPUs": "32 vCPUs",
      "Physical Processor": "Intel Xeon E5-2686 v4 (Broadwell)",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$8935.20 monthly",
      "Linux Reserved cost": "$6098.42 monthly"
    },
    {
      "Instance-Type": "p3dn.24xlarge",
      "Memory": "768.0 GiB",
      "CPUs": "96 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175 (Skylake)",
      "Network Performance": "100 Gigabit",
      "Linux On Demand cost": "$22784.76 monthly",
      "Linux Reserved cost": "$14026.95 monthly"
    },
    {
      "Instance-Type": "r3.2xlarge",
      "Memory": "61.0 GiB",
      "CPUs": "8 vCPUs",
      "Physical Processor": "Intel Xeon E5-2670 v2 (Ivy Bridge)",
      "Network Performance": "High",
      "Linux On Demand cost": "$485.45 monthly",
      "Linux Reserved cost": "$305.14 monthly"
    },
    {
      "Instance-Type": "r3.4xlarge",
      "Memory": "122.0 GiB",
      "CPUs": "16 vCPUs",
      "Physical Processor": "Intel Xeon E5-2670 v2 (Ivy Bridge)",
      "Network Performance": "High",
      "Linux On Demand cost": "$970.90 monthly",
      "Linux Reserved cost": "$610.28 monthly"
    },
    {
      "Instance-Type": "r3.8xlarge",
      "Memory": "244.0 GiB",
      "CPUs": "32 vCPUs",
      "Physical Processor": "Intel Xeon E5-2670 v2 (Ivy Bridge)",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$1941.80 monthly",
      "Linux Reserved cost": "$1220.56 monthly"
    },
    {
      "Instance-Type": "r3.large",
      "Memory": "15.25 GiB",
      "CPUs": "2 vCPUs",
      "Physical Processor": "Intel Xeon E5-2670 v2 (Ivy Bridge)",
      "Network Performance": "Moderate",
      "Linux On Demand cost": "$121.18 monthly",
      "Linux Reserved cost": "$76.65 monthly"
    },
    {
      "Instance-Type": "r3.xlarge",
      "Memory": "30.5 GiB",
      "CPUs": "4 vCPUs",
      "Physical Processor": "Intel Xeon E5-2670 v2 (Ivy Bridge)",
      "Network Performance": "Moderate",
      "Linux On Demand cost": "$243.09 monthly",
      "Linux Reserved cost": "$152.57 monthly"
    },
    {
      "Instance-Type": "r4.16xlarge",
      "Memory": "488.0 GiB",
      "CPUs": "64 vCPUs",
      "Physical Processor": "Intel Xeon E5-2686 v4 (Broadwell)",
      "Network Performance": "20 Gigabit",
      "Linux On Demand cost": "$3106.88 monthly",
      "Linux Reserved cost": "$1962.24 monthly"
    },
    {
      "Instance-Type": "r4.2xlarge",
      "Memory": "61.0 GiB",
      "CPUs": "8 vCPUs",
      "Physical Processor": "Intel Xeon E5-2686 v4 (Broadwell)",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$388.36 monthly",
      "Linux Reserved cost": "$245.28 monthly"
    },
    {
      "Instance-Type": "r4.4xlarge",
      "Memory": "122.0 GiB",
      "CPUs": "16 vCPUs",
      "Physical Processor": "Intel Xeon E5-2686 v4 (Broadwell)",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$776.72 monthly",
      "Linux Reserved cost": "$490.56 monthly"
    },
    {
      "Instance-Type": "r4.8xlarge",
      "Memory": "244.0 GiB",
      "CPUs": "32 vCPUs",
      "Physical Processor": "Intel Xeon E5-2686 v4 (Broadwell)",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$1553.44 monthly",
      "Linux Reserved cost": "$981.12 monthly"
    },
    {
      "Instance-Type": "r4.large",
      "Memory": "15.25 GiB",
      "CPUs": "2 vCPUs",
      "Physical Processor": "Intel Xeon E5-2686 v4 (Broadwell)",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$97.09 monthly",
      "Linux Reserved cost": "$61.32 monthly"
    },
    {
      "Instance-Type": "r4.xlarge",
      "Memory": "30.5 GiB",
      "CPUs": "4 vCPUs",
      "Physical Processor": "Intel Xeon E5-2686 v4 (Broadwell)",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$194.18 monthly",
      "Linux Reserved cost": "$122.64 monthly"
    },
    {
      "Instance-Type": "r5.12xlarge",
      "Memory": "384.0 GiB",
      "CPUs": "48 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$2207.52 monthly",
      "Linux Reserved cost": "$1390.65 monthly"
    },
    {
      "Instance-Type": "r5.16xlarge",
      "Memory": "512.0 GiB",
      "CPUs": "64 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "20 Gigabit",
      "Linux On Demand cost": "$2943.36 monthly",
      "Linux Reserved cost": "$1854.20 monthly"
    },
    {
      "Instance-Type": "r5.24xlarge",
      "Memory": "768.0 GiB",
      "CPUs": "96 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "25 Gigabit",
      "Linux On Demand cost": "$4415.04 monthly",
      "Linux Reserved cost": "$2781.30 monthly"
    },
    {
      "Instance-Type": "r5.2xlarge",
      "Memory": "64.0 GiB",
      "CPUs": "8 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$367.92 monthly",
      "Linux Reserved cost": "$232.14 monthly"
    },
    {
      "Instance-Type": "r5.4xlarge",
      "Memory": "128.0 GiB",
      "CPUs": "16 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$735.84 monthly",
      "Linux Reserved cost": "$463.55 monthly"
    },
    {
      "Instance-Type": "r5.8xlarge",
      "Memory": "256.0 GiB",
      "CPUs": "32 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$1471.68 monthly",
      "Linux Reserved cost": "$927.10 monthly"
    },
    {
      "Instance-Type": "r5.large",
      "Memory": "16.0 GiB",
      "CPUs": "2 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$91.98 monthly",
      "Linux Reserved cost": "$57.67 monthly"
    },
    {
      "Instance-Type": "r5.metal",
      "Memory": "768.0 GiB",
      "CPUs": "96 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "25 Gigabit",
      "Linux On Demand cost": "$4415.04 monthly",
      "Linux Reserved cost": "$2781.30 monthly"
    },
    {
      "Instance-Type": "r5.xlarge",
      "Memory": "32.0 GiB",
      "CPUs": "4 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$183.96 monthly",
      "Linux Reserved cost": "$116.07 monthly"
    },
    {
      "Instance-Type": "r5a.12xlarge",
      "Memory": "384.0 GiB",
      "CPUs": "48 vCPUs",
      "Physical Processor": "AMD EPYC 7571",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$1979.76 monthly",
      "Linux Reserved cost": "$1249.03 monthly"
    },
    {
      "Instance-Type": "r5a.16xlarge",
      "Memory": "512.0 GiB",
      "CPUs": "64 vCPUs",
      "Physical Processor": "AMD EPYC 7571",
      "Network Performance": "12 Gigabit",
      "Linux On Demand cost": "$2639.68 monthly",
      "Linux Reserved cost": "$1665.86 monthly"
    },
    {
      "Instance-Type": "r5a.24xlarge",
      "Memory": "768.0 GiB",
      "CPUs": "96 vCPUs",
      "Physical Processor": "AMD EPYC 7571",
      "Network Performance": "20 Gigabit",
      "Linux On Demand cost": "$3959.52 monthly",
      "Linux Reserved cost": "$2498.79 monthly"
    },
    {
      "Instance-Type": "r5a.2xlarge",
      "Memory": "64.0 GiB",
      "CPUs": "8 vCPUs",
      "Physical Processor": "AMD EPYC 7571",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$329.96 monthly",
      "Linux Reserved cost": "$208.05 monthly"
    },
    {
      "Instance-Type": "r5a.4xlarge",
      "Memory": "128.0 GiB",
      "CPUs": "16 vCPUs",
      "Physical Processor": "AMD EPYC 7571",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$659.92 monthly",
      "Linux Reserved cost": "$416.10 monthly"
    },
    {
      "Instance-Type": "r5a.8xlarge",
      "Memory": "256.0 GiB",
      "CPUs": "32 vCPUs",
      "Physical Processor": "AMD EPYC 7571",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$1319.84 monthly",
      "Linux Reserved cost": "$832.93 monthly"
    },
    {
      "Instance-Type": "r5a.large",
      "Memory": "16.0 GiB",
      "CPUs": "2 vCPUs",
      "Physical Processor": "AMD EPYC 7571",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$82.49 monthly",
      "Linux Reserved cost": "$51.83 monthly"
    },
    {
      "Instance-Type": "r5a.xlarge",
      "Memory": "32.0 GiB",
      "CPUs": "4 vCPUs",
      "Physical Processor": "AMD EPYC 7571",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$164.98 monthly",
      "Linux Reserved cost": "$104.39 monthly"
    },
    {
      "Instance-Type": "r5ad.12xlarge",
      "Memory": "384.0 GiB",
      "CPUs": "48 vCPUs",
      "Physical Processor": "AMD EPYC 7571",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$2295.12 monthly",
      "Linux Reserved cost": "$1453.43 monthly"
    },
    {
      "Instance-Type": "r5ad.24xlarge",
      "Memory": "768.0 GiB",
      "CPUs": "96 vCPUs",
      "Physical Processor": "AMD EPYC 7571",
      "Network Performance": "20 Gigabit",
      "Linux On Demand cost": "$4590.24 monthly",
      "Linux Reserved cost": "$2906.13 monthly"
    },
    {
      "Instance-Type": "r5ad.2xlarge",
      "Memory": "64.0 GiB",
      "CPUs": "8 vCPUs",
      "Physical Processor": "AMD EPYC 7571",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$382.52 monthly",
      "Linux Reserved cost": "$242.36 monthly"
    },
    {
      "Instance-Type": "r5ad.4xlarge",
      "Memory": "128.0 GiB",
      "CPUs": "16 vCPUs",
      "Physical Processor": "AMD EPYC 7571",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$765.04 monthly",
      "Linux Reserved cost": "$484.72 monthly"
    },
    {
      "Instance-Type": "r5ad.large",
      "Memory": "16.0 GiB",
      "CPUs": "2 vCPUs",
      "Physical Processor": "AMD EPYC 7571",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$95.63 monthly",
      "Linux Reserved cost": "$60.59 monthly"
    },
    {
      "Instance-Type": "r5ad.xlarge",
      "Memory": "32.0 GiB",
      "CPUs": "4 vCPUs",
      "Physical Processor": "AMD EPYC 7571",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$191.26 monthly",
      "Linux Reserved cost": "$121.18 monthly"
    },
    {
      "Instance-Type": "r5d.12xlarge",
      "Memory": "384.0 GiB",
      "CPUs": "48 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$2522.88 monthly",
      "Linux Reserved cost": "$1592.13 monthly"
    },
    {
      "Instance-Type": "r5d.16xlarge",
      "Memory": "512.0 GiB",
      "CPUs": "64 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "20 Gigabit",
      "Linux On Demand cost": "$3363.84 monthly",
      "Linux Reserved cost": "$2122.84 monthly"
    },
    {
      "Instance-Type": "r5d.24xlarge",
      "Memory": "768.0 GiB",
      "CPUs": "96 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "25 Gigabit",
      "Linux On Demand cost": "$5045.76 monthly",
      "Linux Reserved cost": "$3184.26 monthly"
    },
    {
      "Instance-Type": "r5d.2xlarge",
      "Memory": "64.0 GiB",
      "CPUs": "8 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$420.48 monthly",
      "Linux Reserved cost": "$265.72 monthly"
    },
    {
      "Instance-Type": "r5d.4xlarge",
      "Memory": "128.0 GiB",
      "CPUs": "16 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$840.96 monthly",
      "Linux Reserved cost": "$530.71 monthly"
    },
    {
      "Instance-Type": "r5d.8xlarge",
      "Memory": "256.0 GiB",
      "CPUs": "32 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$1681.92 monthly",
      "Linux Reserved cost": "$1061.42 monthly"
    },
    {
      "Instance-Type": "r5d.large",
      "Memory": "16.0 GiB",
      "CPUs": "2 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$105.12 monthly",
      "Linux Reserved cost": "$66.43 monthly"
    },
    {
      "Instance-Type": "r5d.metal",
      "Memory": "768.0 GiB",
      "CPUs": "96 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "25 Gigabit",
      "Linux On Demand cost": "$5045.76 monthly",
      "Linux Reserved cost": "$3184.26 monthly"
    },
    {
      "Instance-Type": "r5d.xlarge",
      "Memory": "32.0 GiB",
      "CPUs": "4 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8175",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$210.24 monthly",
      "Linux Reserved cost": "$132.86 monthly"
    },
    {
      "Instance-Type": "r5dn.12xlarge",
      "Memory": "384.0 GiB",
      "CPUs": "48 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8259 (Cascade Lake)",
      "Network Performance": "50 Gigabit",
      "Linux On Demand cost": "$2925.84 monthly",
      "Linux Reserved cost": "$1846.17 monthly"
    },
    {
      "Instance-Type": "r5dn.16xlarge",
      "Memory": "512.0 GiB",
      "CPUs": "64 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8259 (Cascade Lake)",
      "Network Performance": "75 Gigabit",
      "Linux On Demand cost": "$3901.12 monthly",
      "Linux Reserved cost": "$2461.56 monthly"
    },
    {
      "Instance-Type": "r5dn.24xlarge",
      "Memory": "768.0 GiB",
      "CPUs": "96 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8259 (Cascade Lake)",
      "Network Performance": "100 Gigabit",
      "Linux On Demand cost": "$5851.68 monthly",
      "Linux Reserved cost": "$3692.34 monthly"
    },
    {
      "Instance-Type": "r5dn.2xlarge",
      "Memory": "64.0 GiB",
      "CPUs": "8 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8259 (Cascade Lake)",
      "Network Performance": "Up to 25 Gigabit",
      "Linux On Demand cost": "$487.64 monthly",
      "Linux Reserved cost": "$308.06 monthly"
    },
    {
      "Instance-Type": "r5dn.4xlarge",
      "Memory": "128.0 GiB",
      "CPUs": "16 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8259 (Cascade Lake)",
      "Network Performance": "Up to 25 Gigabit",
      "Linux On Demand cost": "$975.28 monthly",
      "Linux Reserved cost": "$615.39 monthly"
    },
    {
      "Instance-Type": "r5dn.8xlarge",
      "Memory": "256.0 GiB",
      "CPUs": "32 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8259 (Cascade Lake)",
      "Network Performance": "25 Gigabit",
      "Linux On Demand cost": "$1950.56 monthly",
      "Linux Reserved cost": "$1230.78 monthly"
    },
    {
      "Instance-Type": "r5dn.large",
      "Memory": "16.0 GiB",
      "CPUs": "2 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8259 (Cascade Lake)",
      "Network Performance": "Up to 25 Gigabit",
      "Linux On Demand cost": "$121.91 monthly",
      "Linux Reserved cost": "$76.65 monthly"
    },
    {
      "Instance-Type": "r5dn.metal",
      "Memory": "768.0 GiB",
      "CPUs": "96 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8259 (Cascade Lake)",
      "Network Performance": "100 Gigabit",
      "Linux On Demand cost": "unavailable",
      "Linux Reserved cost": "unavailable"
    },
    {
      "Instance-Type": "r5dn.xlarge",
      "Memory": "32.0 GiB",
      "CPUs": "4 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8259 (Cascade Lake)",
      "Network Performance": "Up to 25 Gigabit",
      "Linux On Demand cost": "$243.82 monthly",
      "Linux Reserved cost": "$154.03 monthly"
    },
    {
      "Instance-Type": "r5n.12xlarge",
      "Memory": "384.0 GiB",
      "CPUs": "48 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8259 (Cascade Lake)",
      "Network Performance": "50 Gigabit",
      "Linux On Demand cost": "$2610.48 monthly",
      "Linux Reserved cost": "$1644.69 monthly"
    },
    {
      "Instance-Type": "r5n.16xlarge",
      "Memory": "512.0 GiB",
      "CPUs": "64 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8259 (Cascade Lake)",
      "Network Performance": "75 Gigabit",
      "Linux On Demand cost": "$3480.64 monthly",
      "Linux Reserved cost": "$2192.92 monthly"
    },
    {
      "Instance-Type": "r5n.24xlarge",
      "Memory": "768.0 GiB",
      "CPUs": "96 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8259 (Cascade Lake)",
      "Network Performance": "100 Gigabit",
      "Linux On Demand cost": "$5220.96 monthly",
      "Linux Reserved cost": "$3289.38 monthly"
    },
    {
      "Instance-Type": "r5n.2xlarge",
      "Memory": "64.0 GiB",
      "CPUs": "8 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8259 (Cascade Lake)",
      "Network Performance": "Up to 25 Gigabit",
      "Linux On Demand cost": "$435.08 monthly",
      "Linux Reserved cost": "$273.75 monthly"
    },
    {
      "Instance-Type": "r5n.4xlarge",
      "Memory": "128.0 GiB",
      "CPUs": "16 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8259 (Cascade Lake)",
      "Network Performance": "Up to 25 Gigabit",
      "Linux On Demand cost": "$870.16 monthly",
      "Linux Reserved cost": "$548.23 monthly"
    },
    {
      "Instance-Type": "r5n.8xlarge",
      "Memory": "256.0 GiB",
      "CPUs": "32 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8259 (Cascade Lake)",
      "Network Performance": "25 Gigabit",
      "Linux On Demand cost": "$1740.32 monthly",
      "Linux Reserved cost": "$1096.46 monthly"
    },
    {
      "Instance-Type": "r5n.large",
      "Memory": "16.0 GiB",
      "CPUs": "2 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8259 (Cascade Lake)",
      "Network Performance": "Up to 25 Gigabit",
      "Linux On Demand cost": "$108.77 monthly",
      "Linux Reserved cost": "$68.62 monthly"
    },
    {
      "Instance-Type": "r5n.metal",
      "Memory": "768.0 GiB",
      "CPUs": "96 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8259 (Cascade Lake)",
      "Network Performance": "100 Gigabit",
      "Linux On Demand cost": "unavailable",
      "Linux Reserved cost": "unavailable"
    },
    {
      "Instance-Type": "r5n.xlarge",
      "Memory": "32.0 GiB",
      "CPUs": "4 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8259 (Cascade Lake)",
      "Network Performance": "Up to 25 Gigabit",
      "Linux On Demand cost": "$217.54 monthly",
      "Linux Reserved cost": "$137.24 monthly"
    },
    {
      "Instance-Type": "t1.micro",
      "Memory": "0.613 GiB",
      "CPUs": "1 vCPUs",
      "Physical Processor": "Variable",
      "Network Performance": "Very Low",
      "Linux On Demand cost": "$14.60 monthly",
      "Linux Reserved cost": "$10.22 monthly"
    },
    {
      "Instance-Type": "t2.2xlarge",
      "Memory": "32.0 GiB",
      "CPUs": "8 vCPUs for a 4h 4.8m burst",
      "Physical Processor": "Intel Xeon Family",
      "Network Performance": "Moderate",
      "Linux On Demand cost": "$270.976000 monthly",
      "Linux Reserved cost": "$167.90 monthly"
    },
    {
      "Instance-Type": "t2.large",
      "Memory": "8.0 GiB",
      "CPUs": "2 vCPUs for a 7h 12m burst",
      "Physical Processor": "Intel Xeon Family",
      "Network Performance": "Low to Moderate",
      "Linux On Demand cost": "$67.744000 monthly",
      "Linux Reserved cost": "$41.97 monthly"
    },
    {
      "Instance-Type": "t2.medium",
      "Memory": "4.0 GiB",
      "CPUs": "2 vCPUs for a 4h 48m burst",
      "Physical Processor": "Intel Xeon Family",
      "Network Performance": "Low to Moderate",
      "Linux On Demand cost": "$33.87 monthly",
      "Linux Reserved cost": "$20.951000 monthly"
    },
    {
      "Instance-Type": "t2.micro",
      "Memory": "1.0 GiB",
      "CPUs": "1 vCPUs for a 2h 24m burst",
      "Physical Processor": "Intel Xeon Family",
      "Network Performance": "Low to Moderate",
      "Linux On Demand cost": "$8.468000 monthly",
      "Linux Reserved cost": "$5.256000 monthly"
    },
    {
      "Instance-Type": "t2.nano",
      "Memory": "0.5 GiB",
      "CPUs": "1 vCPUs for a 1h 12m burst",
      "Physical Processor": "Intel Xeon Family",
      "Network Performance": "Low",
      "Linux On Demand cost": "$4.234000 monthly",
      "Linux Reserved cost": "$2.628000 monthly"
    },
    {
      "Instance-Type": "t2.small",
      "Memory": "2.0 GiB",
      "CPUs": "1 vCPUs for a 4h 48m burst",
      "Physical Processor": "Intel Xeon Family",
      "Network Performance": "Low to Moderate",
      "Linux On Demand cost": "$16.79 monthly",
      "Linux Reserved cost": "$10.51 monthly"
    },
    {
      "Instance-Type": "t2.xlarge",
      "Memory": "16.0 GiB",
      "CPUs": "4 vCPUs for a 5h 24m burst",
      "Physical Processor": "Intel Xeon Family",
      "Network Performance": "Moderate",
      "Linux On Demand cost": "$135.488000 monthly",
      "Linux Reserved cost": "$83.95 monthly"
    },
    {
      "Instance-Type": "t3.2xlarge",
      "Memory": "32.0 GiB",
      "CPUs": "8 vCPUs for a 9h 36m burst",
      "Physical Processor": "Intel Skylake E5 2686 v5 (2.5 GHz)",
      "Network Performance": "Moderate",
      "Linux On Demand cost": "$242.944000 monthly",
      "Linux Reserved cost": "$152.278000 monthly"
    },
    {
      "Instance-Type": "t3.large",
      "Memory": "8.0 GiB",
      "CPUs": "2 vCPUs for a 7h 12m burst",
      "Physical Processor": "Intel Skylake E5 2686 v5 (2.5 GHz)",
      "Network Performance": "Low to Moderate",
      "Linux On Demand cost": "$60.736000 monthly",
      "Linux Reserved cost": "$38.106000 monthly"
    },
    {
      "Instance-Type": "t3.medium",
      "Memory": "4.0 GiB",
      "CPUs": "2 vCPUs for a 4h 48m burst",
      "Physical Processor": "Intel Skylake E5 2686 v5 (2.5 GHz)",
      "Network Performance": "Low to Moderate",
      "Linux On Demand cost": "$30.368000 monthly",
      "Linux Reserved cost": "$19.05 monthly"
    },
    {
      "Instance-Type": "t3.micro",
      "Memory": "1.0 GiB",
      "CPUs": "2 vCPUs for a 2h 24m burst",
      "Physical Processor": "Intel Skylake E5 2686 v5 (2.5 GHz)",
      "Network Performance": "Low to Moderate",
      "Linux On Demand cost": "$7.59 monthly",
      "Linux Reserved cost": "$4.74 monthly"
    },
    {
      "Instance-Type": "t3.nano",
      "Memory": "0.5 GiB",
      "CPUs": "2 vCPUs for a 1h 12m burst",
      "Physical Processor": "Intel Skylake E5 2686 v5 (2.5 GHz)",
      "Network Performance": "Low",
      "Linux On Demand cost": "$3.796000 monthly",
      "Linux Reserved cost": "$2.40 monthly"
    },
    {
      "Instance-Type": "t3.small",
      "Memory": "2.0 GiB",
      "CPUs": "2 vCPUs for a 4h 48m burst",
      "Physical Processor": "Intel Skylake E5 2686 v5 (2.5 GHz)",
      "Network Performance": "Low to Moderate",
      "Linux On Demand cost": "$15.184000 monthly",
      "Linux Reserved cost": "$9.49 monthly"
    },
    {
      "Instance-Type": "t3.xlarge",
      "Memory": "16.0 GiB",
      "CPUs": "4 vCPUs for a 9h 36m burst",
      "Physical Processor": "Intel Skylake E5 2686 v5 (2.5 GHz)",
      "Network Performance": "Moderate",
      "Linux On Demand cost": "$121.47 monthly",
      "Linux Reserved cost": "$76.13 monthly"
    },
    {
      "Instance-Type": "t3a.2xlarge",
      "Memory": "32.0 GiB",
      "CPUs": "8 vCPUs for a 9h 36m burst",
      "Physical Processor": "AMD EPYC 7571",
      "Network Performance": "Moderate",
      "Linux On Demand cost": "$219.584000 monthly",
      "Linux Reserved cost": "$137.678000 monthly"
    },
    {
      "Instance-Type": "t3a.large",
      "Memory": "8.0 GiB",
      "CPUs": "2 vCPUs for a 7h 12m burst",
      "Physical Processor": "AMD EPYC 7571",
      "Network Performance": "Low to Moderate",
      "Linux On Demand cost": "$54.896000 monthly",
      "Linux Reserved cost": "$34.38 monthly"
    },
    {
      "Instance-Type": "t3a.medium",
      "Memory": "4.0 GiB",
      "CPUs": "2 vCPUs for a 4h 48m burst",
      "Physical Processor": "AMD EPYC 7571",
      "Network Performance": "Low to Moderate",
      "Linux On Demand cost": "$27.448000 monthly",
      "Linux Reserved cost": "$17.228000 monthly"
    },
    {
      "Instance-Type": "t3a.micro",
      "Memory": "1.0 GiB",
      "CPUs": "2 vCPUs for a 2h 24m burst",
      "Physical Processor": "AMD EPYC 7571",
      "Network Performance": "Low to Moderate",
      "Linux On Demand cost": "$6.86 monthly",
      "Linux Reserved cost": "$4.307000 monthly"
    },
    {
      "Instance-Type": "t3a.nano",
      "Memory": "0.5 GiB",
      "CPUs": "2 vCPUs for a 1h 12m burst",
      "Physical Processor": "AMD EPYC 7571",
      "Network Performance": "Low",
      "Linux On Demand cost": "$3.431000 monthly",
      "Linux Reserved cost": "$2.117000 monthly"
    },
    {
      "Instance-Type": "t3a.small",
      "Memory": "2.0 GiB",
      "CPUs": "2 vCPUs for a 4h 48m burst",
      "Physical Processor": "AMD EPYC 7571",
      "Network Performance": "Low to Moderate",
      "Linux On Demand cost": "$13.724000 monthly",
      "Linux Reserved cost": "$8.614000 monthly"
    },
    {
      "Instance-Type": "t3a.xlarge",
      "Memory": "16.0 GiB",
      "CPUs": "4 vCPUs for a 9h 36m burst",
      "Physical Processor": "AMD EPYC 7571",
      "Network Performance": "Moderate",
      "Linux On Demand cost": "$109.79 monthly",
      "Linux Reserved cost": "$68.83 monthly"
    },
    {
      "Instance-Type": "u-12tb1.metal",
      "Memory": "12288.0 GiB",
      "CPUs": "448 vCPUs",
      "Physical Processor": "Intel Xeon Scalable (Skylake) processors",
      "Network Performance": "25 Gigabit",
      "Linux On Demand cost": "unavailable",
      "Linux Reserved cost": "unavailable"
    },
    {
      "Instance-Type": "u-18tb1.metal",
      "Memory": "18432.0 GiB",
      "CPUs": "448 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8280L (Cascade Lake)",
      "Network Performance": "100 Gigabit",
      "Linux On Demand cost": "unavailable",
      "Linux Reserved cost": "unavailable"
    },
    {
      "Instance-Type": "u-24tb1.metal",
      "Memory": "24576.0 GiB",
      "CPUs": "448 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8280L (Cascade Lake)",
      "Network Performance": "100 Gigabit",
      "Linux On Demand cost": "unavailable",
      "Linux Reserved cost": "unavailable"
    },
    {
      "Instance-Type": "u-6tb1.metal",
      "Memory": "6144.0 GiB",
      "CPUs": "448 vCPUs",
      "Physical Processor": "Intel Xeon Scalable (Skylake) processors",
      "Network Performance": "25 Gigabit",
      "Linux On Demand cost": "unavailable",
      "Linux Reserved cost": "unavailable"
    },
    {
      "Instance-Type": "u-9tb1.metal",
      "Memory": "9216.0 GiB",
      "CPUs": "448 vCPUs",
      "Physical Processor": "Intel Xeon Scalable (Skylake) processors",
      "Network Performance": "25 Gigabit",
      "Linux On Demand cost": "unavailable",
      "Linux Reserved cost": "unavailable"
    },
    {
      "Instance-Type": "x1.16xlarge",
      "Memory": "976.0 GiB",
      "CPUs": "64 vCPUs",
      "Physical Processor": "High Frequency Intel Xeon E7-8880 v3 (Haswell)",
      "Network Performance": "High",
      "Linux On Demand cost": "$4868.37 monthly",
      "Linux Reserved cost": "$.30 monthly"
    },
    {
      "Instance-Type": "x1.32xlarge",
      "Memory": "1952.0 GiB",
      "CPUs": "128 vCPUs",
      "Physical Processor": "High Frequency Intel Xeon E7-8880 v3 (Haswell)",
      "Network Performance": "High",
      "Linux On Demand cost": "$9736.74 monthly",
      "Linux Reserved cost": "$5999.87 monthly"
    },
    {
      "Instance-Type": "x1e.16xlarge",
      "Memory": "1952.0 GiB",
      "CPUs": "64 vCPUs",
      "Physical Processor": "High Frequency Intel Xeon E7-8880 v3 (Haswell)",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$9741.12 monthly",
      "Linux Reserved cost": "$6002.79 monthly"
    },
    {
      "Instance-Type": "x1e.2xlarge",
      "Memory": "244.0 GiB",
      "CPUs": "8 vCPUs",
      "Physical Processor": "High Frequency Intel Xeon E7-8880 v3 (Haswell)",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$1217.64 monthly",
      "Linux Reserved cost": "$750.44 monthly"
    },
    {
      "Instance-Type": "x1e.32xlarge",
      "Memory": "3904.0 GiB",
      "CPUs": "128 vCPUs",
      "Physical Processor": "High Frequency Intel Xeon E7-8880 v3 (Haswell)",
      "Network Performance": "25 Gigabit",
      "Linux On Demand cost": "$19482.24 monthly",
      "Linux Reserved cost": "unavailable"
    },
    {
      "Instance-Type": "x1e.4xlarge",
      "Memory": "488.0 GiB",
      "CPUs": "16 vCPUs",
      "Physical Processor": "High Frequency Intel Xeon E7-8880 v3 (Haswell)",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$2435.28 monthly",
      "Linux Reserved cost": "$1500.88 monthly"
    },
    {
      "Instance-Type": "x1e.8xlarge",
      "Memory": "976.0 GiB",
      "CPUs": "32 vCPUs",
      "Physical Processor": "High Frequency Intel Xeon E7-8880 v3 (Haswell)",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$4870.56 monthly",
      "Linux Reserved cost": "$3001.76 monthly"
    },
    {
      "Instance-Type": "x1e.xlarge",
      "Memory": "122.0 GiB",
      "CPUs": "4 vCPUs",
      "Physical Processor": "High Frequency Intel Xeon E7-8880 v3 (Haswell)",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$608.82 monthly",
      "Linux Reserved cost": "$375.22 monthly"
    },
    {
      "Instance-Type": "z1d.12xlarge",
      "Memory": "384.0 GiB",
      "CPUs": "48 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8151",
      "Network Performance": "25 Gigabit",
      "Linux On Demand cost": "$3258.72 monthly",
      "Linux Reserved cost": "$2060.06 monthly"
    },
    {
      "Instance-Type": "z1d.2xlarge",
      "Memory": "64.0 GiB",
      "CPUs": "8 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8151",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$543.12 monthly",
      "Linux Reserved cost": "$343.10 monthly"
    },
    {
      "Instance-Type": "z1d.3xlarge",
      "Memory": "96.0 GiB",
      "CPUs": "12 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8151",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$814.68 monthly",
      "Linux Reserved cost": "$514.65 monthly"
    },
    {
      "Instance-Type": "z1d.6xlarge",
      "Memory": "192.0 GiB",
      "CPUs": "24 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8151",
      "Network Performance": "10 Gigabit",
      "Linux On Demand cost": "$1629.36 monthly",
      "Linux Reserved cost": "$1030.03 monthly"
    },
    {
      "Instance-Type": "z1d.large",
      "Memory": "16.0 GiB",
      "CPUs": "2 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8151",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$135.78 monthly",
      "Linux Reserved cost": "$86.14 monthly"
    },
    {
      "Instance-Type": "z1d.metal",
      "Memory": "384.0 GiB",
      "CPUs": "48 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8151",
      "Network Performance": "25 Gigabit",
      "Linux On Demand cost": "$3258.72 monthly",
      "Linux Reserved cost": "$2060.06 monthly"
    },
    {
      "Instance-Type": "z1d.xlarge",
      "Memory": "32.0 GiB",
      "CPUs": "4 vCPUs",
      "Physical Processor": "Intel Xeon Platinum 8151",
      "Network Performance": "Up to 10 Gigabit",
      "Linux On Demand cost": "$271.56 monthly",
      "Linux Reserved cost": "$171.55 monthly"
    }
  ]


  // Populate the dropdown list
  function populateDropdown() {
    const dropdown = document.getElementById("instanceDropdown");
    instances.forEach(instance => {
        const option = document.createElement("option");
        option.value = instance["Instance-Type"];
        option.textContent = instance["Instance-Type"];
        dropdown.appendChild(option);
    });
}

// Update details when instance is selected
function updateDetails() {
    const selectedType = document.getElementById("instanceDropdown").value;
    let detailsParagraph = document.getElementById("details");

    console.log('selectedType '+selectedType);
    if (selectedType) {
        const instance = getInstanceDetails(selectedType) ;
        detailsParagraph.innerHTML = `<b>vCPUs:</b> ${instance.CPUs} | 💾 <b>Memory:</b> ${instance.Memory} GiB`;
        let executorCores=  document.getElementById("executorCores");

        executorCores.innerHTML = "";


        let totalcores = instance.CPUs.replace("vCPUs","")
        for (let i = 1; i <= totalcores-1; i++) {
          let option = document.createElement("option");
          option.value = i;
          option.textContent = i;
          executorCores.appendChild(option);
        }
    } else {
        detailsParagraph.innerHTML = "";
    }

   

    /*options[category].forEach(item => {
      let option = document.createElement("option");
      option.value = item.toLowerCase();
      option.textContent = item;
      numberOfInstancesDropDown.appendChild(option);
  });*/
}


function getInstanceDetails(selectedInstanceType){
  if (selectedInstanceType) {
    const instance = instances.find(inst => inst["Instance-Type"] === selectedInstanceType);
    return instance;
  }else { return ;}
}

function updateText() {
  const selectedType = document.getElementById("instanceDropdown").value;
  const numberOfInstances = document.getElementById("numberOfInstances").value;
  const expectedCores = document.getElementById("executorCores").value;
  // Validation check
  if (!numberOfInstances || !selectedType || !expectedCores) {
    alert("Please fill out all fields!");
    return;
  }

  const instanceDetails = getInstanceDetails(selectedType)
 

const memory = instanceDetails.Memory.replace(" GiB", ""); 
const cpu = instanceDetails.CPUs.replace(" vCPUs", ""); 

console.log(memory);
console.log(cpu);

totalMemory = numberOfInstances * memory;
totalCore = numberOfInstances * cpu;


totalAvailableCores= (cpu-1)*numberOfInstances;
totalExecutors = totalCore/expectedCores; //(totalAvailableCores/expectedCores);
totalAvaialbleExc = ((totalAvailableCores/expectedCores)-1);

numOfExecutorPerNode = (cpu-1)*numberOfInstances

eachExecutorMemory = memory/((totalAvailableCores/expectedCores)/numberOfInstances);
heapOverhead = ((totalMemory/totalExecutors)*0.07).toFixed(2);

eachExecutorActualMemory = (eachExecutorMemory - heapOverhead).toFixed(2);

const multilineText = `
  <h2>Cluster Configuration Summary</h2>

  <p>Now with <strong>${numberOfInstances} - ${selectedType}</strong>, we have:</p>
  <ul>
    <li><strong>Total Memory Pool:</strong> (${memory} GiB × ${numberOfInstances}) = <strong>${totalMemory} GiB</strong></li>
    <li><strong>Total vCPUs:</strong> ( ${cpu} vCores x ${numberOfInstances}) = <strong>${totalCore} vCores</strong></li>
  </ul>

  <h2>Executor Configuration</h2>
  <p><strong>Deciding <code>num-executors</code> & <code>executor-max-cores</code>:</strong></p>
  <ul>
    <li>Assigning <strong>${expectedCores} cores</strong> per executor → <code>--executor-cores = ${expectedCores}</code> (Good for HDFS throughput, recommended but adjustable per workload)</li>
    <li>Leave <strong>1 core per node</strong> for Hadoop/Yarn daemons → 
        <strong>Available cores per node:</strong> ${cpu} - 1 = <strong>${cpu-1}</strong></li>
    <li>Executors per node = Available-cores-per-node / cores-per-executor  ${cpu-1}/${expectedCores} = ${(cpu-1)/expectedCores} (for verification per node)</li>
  </ul>

  <h4>Cluster Resource Allocation</h4>
  <ul>
    <li><strong>Total available cores:</strong> ${cpu-1} × ${numberOfInstances} = <strong>${totalAvailableCores}</strong></li>
    <li><strong>Available Executors:</strong> ${totalAvailableCores} / ${expectedCores} = <strong>${(totalAvailableCores/expectedCores)}</strong></li>
    <li>Considering 1 executor for ApplicationManager , so remaining → <code>--num-executors = ~ ${Math.floor(totalAvaialbleExc)} </code></li>
  </ul>

  <h4>Memory Allocation Per Executor</h4>
  <ul>
    <li>Memory per executor = (Memory per node) ÷ (Total executors ÷ Total nodes)</li>
    <li>${memory} GiB / (${totalAvailableCores/expectedCores}/${numberOfInstances}) = ${eachExecutorMemory} GiB</li>
    <li>Off-heap overhead (7%) = ${heapOverhead} GiB</li>
    <li>Final executor memory = ${eachExecutorMemory} - ${heapOverhead} = ${eachExecutorActualMemory} GiB → <code> --executor-memory = ${eachExecutorActualMemory}GB </code></li>
  <ul>
`;

// Inject into HTML
document.getElementById("output").innerHTML = multilineText;

  const output = document.getElementById("output");
  output.innerHTML = `<b>${multilineText}</b>`
}


// Initialize dropdown on page load
window.onload = populateDropdown;

document.addEventListener("DOMContentLoaded", () => {
  populateDropdown();
});