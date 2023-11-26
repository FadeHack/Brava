import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Grid,
  Menu,
  MenuItem,
  useMediaQuery,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { ArrowDropDown, Twitter, Instagram, Facebook, Search, ShoppingCart } from '@material-ui/icons';

import { styled, useTheme } from '@mui/system';
import styles from '../styles/Navbar.module.css'; // Import the CSS module

const StyledMenu = styled(Menu)({
  '& .MuiPaper-root': {
    backgroundColor: '#212122',
    color: '#fff',
  },
});

const StyledMenuItem = styled(MenuItem)({
  '&:hover': {
    backgroundColor: '#444',
  },
});

const Navbar = () => {
  const [brandsMenu, setBrandsMenu] = React.useState(null);
  const [shopMenu, setShopMenu] = React.useState(null);
  const [showMenu, setShowMenu] = React.useState(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleBrandsMenuOpen = (event) => {
    setBrandsMenu(event.currentTarget);
  };

  const handleShopMenuOpen = (event) => {
    setShopMenu(event.currentTarget);
  };

  const handleMenuClose = () => {
    setBrandsMenu(null);
    setShopMenu(null);
    setShowMenu(false);
  };

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <AppBar position="static" className={styles.navbar}>
        <Toolbar className={styles.nav}>
          {/* Hamburger icon for small screens */}
          {isSmallScreen && (
            <IconButton color="inherit" onClick={handleToggleMenu}>
              {showMenu ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          )}
          {/* Left Section */}
          <div className={styles['navbar-left']}>
            {!isSmallScreen && (
              <>
                <Button
                  color="inherit"
                  endIcon={<ArrowDropDown />}
                  onClick={handleBrandsMenuOpen}
                  onMouseEnter={handleBrandsMenuOpen}
                >
                  Brand
                </Button>
                <StyledMenu
                  id="brands-menu"
                  className={styles.brands}
                  anchorEl={brandsMenu}
                  keepMounted
                  open={Boolean(brandsMenu)}
                  onClose={handleMenuClose}
                >
                  {Array.from({ length: 10 }, (_, index) => (
                    <StyledMenuItem key={index} onClick={handleMenuClose} className={styles.brandName}>
                      Brand {index + 1}
                    </StyledMenuItem>
                  ))}
                </StyledMenu>

                <Button
                  color="inherit"
                  endIcon={<ArrowDropDown />}
                  onClick={handleShopMenuOpen}
                  onMouseEnter={handleShopMenuOpen}
                >
                  Shop
                </Button>
                <StyledMenu
                  id="shop-menu"
                  anchorEl={shopMenu}
                  keepMounted
                  open={Boolean(shopMenu)}
                  onClose={handleMenuClose}
                  className={styles.fullWidthMenu}
                >
                  <Grid container>
                    <Grid item xs={5}>
                      <div className={styles.shopSection}>
                        <Typography variant="h5">Apparel</Typography>
                        {Array.from({ length: 5 }, (_, index) => (
                          <Typography key={index} className={styles.shopItem} onClick={handleMenuClose}>
                            Item {index + 1}
                          </Typography>
                        ))}
                      </div>
                    </Grid>
                    <Grid item xs={5}>
                      <div className={styles.shopSection}>
                        <Typography variant="h5">Home</Typography>
                        {Array.from({ length: 4 }, (_, index) => (
                          <Typography key={index} className={styles.shopItem} onClick={handleMenuClose}>
                            Item {index + 1}
                          </Typography>
                        ))}
                      </div>
                    </Grid>
                  </Grid>
                </StyledMenu>

                <Button color="inherit">Premium</Button>
                <Button color="inherit">Gift Card</Button>
              </>
            )}
          </div>

          {/* Middle Section */}
          <Typography variant="h6" className={styles['navbar-middle']}>
            <img src="/brava.webp" alt="Brand Logo" className={styles['navbar-logo']} />
          </Typography>

          {/* Right Section */}
          <div className={styles['navbar-right']}>
            {!isSmallScreen && (
              <>
                <Button color="inherit" className={styles.aff}>
                  become an affiliate
                </Button>

                {/* Social icons */}
                <IconButton className={styles['social-icon']} color="inherit">
                  <Twitter />
                </IconButton>
                <IconButton className={styles['social-icon']} color="inherit">
                  <Instagram />
                </IconButton>
                <IconButton className={styles['social-icon']} color="inherit">
                  <Facebook />
                </IconButton>

                {/* Search icon */}
                <IconButton className={styles['search-icon']} color="inherit">
                  <Search />
                </IconButton>

                {/* Cart icon */}
                <IconButton className={styles['cart-icon']} color="inherit">
                  <ShoppingCart />
                </IconButton>
              </>
            )}
              {/* Search icon for smaller screens */}
              {isSmallScreen && (
                <>
                <IconButton className={styles['search-icon']} color="inherit">
                <Search />
                </IconButton>
                <IconButton className={styles['cart-icon']} color="inherit">
                  <ShoppingCart />
                </IconButton>
                </>
              )}

          </div>
        </Toolbar>
      </AppBar>

      {/* Render menu items for small screens */}
      {isSmallScreen && showMenu && (
        
        <div className={styles.mobileMenu}>
          <IconButton
            color="inherit"
            className={styles.closeButton}
            onClick={handleMenuClose}
          >
            <CloseIcon />
          </IconButton>
          {/* Brand dropdown for mobile */}
          <Button
            color="inherit"
            endIcon={<ArrowDropDown />}
            onClick={handleBrandsMenuOpen}
            onMouseEnter={handleBrandsMenuOpen}
          >
            Brand
          </Button>
          <StyledMenu
            id="brands-menu"
            className={styles.brands}
            anchorEl={brandsMenu}
            keepMounted
            open={Boolean(brandsMenu)}
            onClose={handleMenuClose}
          >
            {Array.from({ length: 10 }, (_, index) => (
              <StyledMenuItem key={index} onClick={handleMenuClose}>
                Brand {index + 1}
              </StyledMenuItem>
            ))}
          </StyledMenu>

          {/* Shop dropdown for mobile */}
          <Button
            color="inherit"
            endIcon={<ArrowDropDown />}
            onClick={handleShopMenuOpen}
            onMouseEnter={handleShopMenuOpen}
          >
            Shop
          </Button>
          <StyledMenu
            id="shop-menu"
            anchorEl={shopMenu}
            keepMounted
            open={Boolean(shopMenu)}
            onClose={handleMenuClose}
            className={styles.fullWidthMenu}
          >
            <Grid container>
              <Grid item xs={5}>
                <div className={styles.shopSection}>
                  <Typography variant="h5">Apparel</Typography>
                  {Array.from({ length: 5 }, (_, index) => (
                    <Typography key={index} className={styles.shopItem} onClick={handleMenuClose}>
                      Item {index + 1}
                    </Typography>
                  ))}
                </div>
              </Grid>
              <Grid item xs={5}>
                <div className={styles.shopSection}>
                  <Typography variant="h5">Home</Typography>
                  {Array.from({ length: 4 }, (_, index) => (
                    <Typography key={index} className={styles.shopItem} onClick={handleMenuClose}>
                      Item {index + 1}
                    </Typography>
                  ))}
                </div>
              </Grid>
            </Grid>
          </StyledMenu>

          {/* Premium and Gift Card for mobile */}
          <Button color="inherit" onClick={handleMenuClose}>
            Premium
          </Button>
          <Button color="inherit" onClick={handleMenuClose}>
            Gift Card
          </Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
