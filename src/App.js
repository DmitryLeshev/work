import React, { Component } from "react";
import {
  Button,
  createMuiTheme,
  CssBaseline,
  Grid,
  Icon,
  TextField,
  ThemeProvider,
  Typography,
  withStyles,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";

class App extends Component {
  state = {
    connected: true,
    form: {
      ipAdress: "192.168.1.17192.168.1.26",
      shluz: "192.168.1.1",
      mask: "255.255.255.0",
      dns: "192.168.1.1. 8.8.8.8",
    },
  };
  render() {
    const { classes } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main className={classes.container}>
          <Typography className={classes.title} variant="h3" align="center">
            Конфигурация подключения устройства АСАИБ
          </Typography>

          <Typography className={classes.title} variant="h4" align="center">
            Ethernet-соединение
          </Typography>

          <Grid className={classes.info} container>
            <Grid item container alignItems="center">
              <Typography variant="h5" align="left">
                Провод {this.state.connected ? "" : "не"} подключен &emsp;
              </Typography>
              {this.state.connected ? (
                <Icon>
                  <CheckIcon className={classes.success} />
                </Icon>
              ) : (
                <Icon>
                  <ClearIcon className={classes.error} />
                </Icon>
              )}
            </Grid>
            <Grid item container alignItems="center">
              <Typography variant="h5" align="left">
                Админ-панель: &emsp;
              </Typography>
              <Typography variant="h5" color="textSecondary">
                {this.state.form.ipAdress &&
                  `http://${this.state.form.ipAdress}`}
              </Typography>
            </Grid>
          </Grid>

          <TextField
            className={classes.field}
            label="IP-Адрес"
            variant="outlined"
            value={this.state.form.ipAdress}
            disabled={!!this.state.form.ipAdress}
          />
          <TextField
            className={classes.field}
            label="Шлюз"
            variant="outlined"
            value={this.state.form.shluz}
            disabled={!!this.state.form.shluz}
          />
          <TextField
            className={classes.field}
            label="Маска"
            variant="outlined"
            value={this.state.form.mask}
            disabled={!!this.state.form.mask}
          />
          <TextField
            className={classes.field}
            label="DNS"
            variant="outlined"
            value={this.state.form.dns}
            disabled={!!this.state.form.dns}
          />

          <Button
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Задать вручную
          </Button>
        </main>
      </ThemeProvider>
    );
  }
}

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#ff661a",
      contrastText: "#ffffff",
    },
  },
});

const styles = (theme) => ({
  error: {
    color: theme.palette.error.main,
  },
  success: {
    color: theme.palette.success.main,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "600px",
    margin: theme.spacing(3),
    padding: theme.spacing(3),
    backgroundColor: `rgba(0, 0, 0, 0.5)`,
    boxShadow: theme.shadows[3],
    borderRadius: theme.spacing(1),
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  info: {
    marginBottom: theme.spacing(3),
  },
  field: {
    marginBottom: theme.spacing(3),
  },
  button: {
    marginLeft: "auto",
  },
  icon: {
    marginLeft: theme.spacing(2),
  },
  http: {
    marginLeft: theme.spacing(2),
  },
});

export default withStyles(styles, { withTheme: true })(App);
