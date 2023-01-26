import * as Chakra from '@chakra-ui/react';
import * as FM from 'framer-motion';

export const FMC_Component = Chakra.chakra(FM.motion.div, {
  shouldForwardProp: (prop) =>
    FM.isValidMotionProp(prop) || Chakra.shouldForwardProp(prop)
});

export const NavContainer = {
  open: {
    width: ['80px', '350px']
  },
  closed: {
    width: ['350px', '80px']
  }
};

export const NavList = {
  open: { width: ['0%', '100%', '100%'] },
  closed: { width: ['100%', '100%', '0%'] }
};

export const NavItem = {
  open: { opacity: ['0%', '0%', '0%', '0%', '0%', '50%', '100%'] },
  closed: { opacity: ['100%', '0%'] }
};

export const NavIcon = {
  top: {
    open: { rotate: ['0deg', '0deg', '-45deg'], translateY: ['0px', '5.05px', '5.05px'] },
    closed: { rotate: ['-45deg', '0deg', '0deg'], translateY: ['5.05px', '5.05px', '0px'] }
  },
  bottom: {
    open: { rotate: ['0deg', '0deg', '45deg'], translateY: ['0px', '-5.05px', '-5.05px'] },
    closed: { rotate: ['45deg', '0deg', '0deg'], translateY: ['-5.05px','-5.05px', '0px'] }
  }
};

export const ContainerTransition = {
  staggerChildren: 0.5,
  duration: 1,
  ease: 'easeInOut'
};

export const ChildrenTransition = {
  duration: 1,
  ease: 'easeInOut'
};
