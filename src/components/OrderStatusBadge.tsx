
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Clock, 
  Scissors, 
  Package, 
  Truck, 
  AlertTriangle,
  XCircle
} from 'lucide-react';

export type OrderStatus = 
  | 'pending' 
  | 'accepted' 
  | 'fabric_sourced' 
  | 'in_progress'
  | 'final_adjustments'
  | 'ready'
  | 'delivered'
  | 'cancelled'
  | 'disputed';

interface OrderStatusBadgeProps {
  status: OrderStatus;
  className?: string;
}

const getStatusConfig = (status: OrderStatus) => {
  switch (status) {
    case 'pending':
      return { 
        label: 'Pending', 
        icon: Clock, 
        variant: 'outline',
        className: 'border-amber-500 text-amber-700 bg-amber-50'
      };
    case 'accepted':
      return { 
        label: 'Accepted', 
        icon: CheckCircle, 
        variant: 'outline',
        className: 'border-blue-500 text-blue-700 bg-blue-50'
      };
    case 'fabric_sourced':
      return { 
        label: 'Fabric Sourced', 
        icon: Package, 
        variant: 'outline',
        className: 'border-teal-500 text-teal-700 bg-teal-50'
      };
    case 'in_progress':
      return { 
        label: 'In Progress', 
        icon: Scissors, 
        variant: 'outline',
        className: 'border-indigo-500 text-indigo-700 bg-indigo-50'
      };
    case 'final_adjustments':
      return { 
        label: 'Final Adjustments', 
        icon: Scissors, 
        variant: 'outline',
        className: 'border-purple-500 text-purple-700 bg-purple-50'
      };
    case 'ready':
      return { 
        label: 'Ready for Pickup', 
        icon: CheckCircle, 
        variant: 'outline',
        className: 'border-green-500 text-green-700 bg-green-50'
      };
    case 'delivered':
      return { 
        label: 'Delivered', 
        icon: Truck, 
        variant: 'outline',
        className: 'border-emerald-500 text-emerald-700 bg-emerald-50'
      };
    case 'cancelled':
      return { 
        label: 'Cancelled', 
        icon: XCircle, 
        variant: 'outline',
        className: 'border-red-500 text-red-700 bg-red-50'
      };
    case 'disputed':
      return { 
        label: 'Disputed', 
        icon: AlertTriangle, 
        variant: 'outline',
        className: 'border-orange-500 text-orange-700 bg-orange-50'
      };
    default:
      return { 
        label: 'Unknown', 
        icon: Clock, 
        variant: 'outline',
        className: 'border-gray-500 text-gray-700 bg-gray-50'
      };
  }
};

const OrderStatusBadge: React.FC<OrderStatusBadgeProps> = ({ status, className = '' }) => {
  const { label, icon: Icon, className: statusClassName } = getStatusConfig(status);
  
  return (
    <Badge variant="outline" className={`${statusClassName} ${className} flex items-center gap-1 px-2 py-1`}>
      <Icon className="h-3 w-3" />
      <span>{label}</span>
    </Badge>
  );
};

export default OrderStatusBadge;
