// Icon mapping utility
import {
  Mail, Phone, MapPin, Send, Linkedin, Github, Download, MessageSquare,
  Ruler, Layers, Zap, Target, Clock, Users, Calendar, ExternalLink, FileText,
  GraduationCap, Award, BookOpen, ChevronRight
} from 'lucide-react';

export const iconMap = {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Download,
  MessageSquare,
  Ruler,
  Layers,
  Zap,
  Target,
  Clock,
  Users,
  Calendar,
  ExternalLink,
  FileText,
  GraduationCap,
  Award,
  BookOpen,
  ChevronRight
};

export type IconName = keyof typeof iconMap;

export const getIcon = (iconName: IconName) => {
  return iconMap[iconName];
};