import { 
    DashboardIcon, ArchiveIcon, PersonIcon,
    BackpackIcon, TargetIcon, IdCardIcon, DesktopIcon
} from '@radix-ui/react-icons';
import { getDecodedToken, ROLE_TYPE } from '../../utils';

const menuData = () => {
    const decoded = getDecodedToken();

    if (!decoded) return [];

    if (decoded.data.role === ROLE_TYPE.EMPLOYEE) {
      return [
        {
          id: "1",
          title: "Dashboard",
          icon: () => <DashboardIcon />,
          link: "/dashboard",
        },
        {
          id: "2",
          title: "Transaksi",
          icon: () => <ArchiveIcon />,
          link: "/transaction",
        },
        {
          id: "3",
          title: "Customer",
          icon: () => <PersonIcon />,
          link: "/customer",
        },
      ];
    }

    return [
      {
        id: "1",
        title: "Dashboard",
        icon: () => <DashboardIcon />,
        link: "/dashboard",
      },
      {
        id: "2",
        title: "Transaksi",
        icon: () => <ArchiveIcon />,
        link: "/transaction",
      },
      {
        id: "3",
        title: "Customer",
        icon: () => <PersonIcon />,
        link: "/customer",
      },
      {
        id: "4",
        title: "Karyawan",
        icon: () => <BackpackIcon />,
        link: "/employee",
      },
      {
        id: "5",
        title: "Paket Laundry",
        icon: () => <TargetIcon />,
        link: "/laundry-package",
      },
      {
        id: "6",
        title: "Tipe Pembayaran",
        icon: () => <IdCardIcon />,
        link: "/payment-type",
      },
      {
        id: "7",
        title: "Identitas Aplikasi",
        icon: () => <DesktopIcon />,
        link: "/identity",
      },
    ];
  };
  
  export default menuData;
  