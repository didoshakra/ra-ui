//MUIv4.5.1
import React from "react";
import PropTypes from "prop-types";
import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
  darken
} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { blue, pink } from "@material-ui/core/colors";
import deepmerge from "deepmerge";

export const themeColor = blue[700];

const themeInitialOptions = {
  dense: false,
  paletteColors: {},
  spacing: 8 // spacing unit
};

function usingHighDensity(themeOptions) {
  return deepmerge(themeOptions, {
    props: {
      MuiButton: {
        size: "small"
      },
      MuiFilledInput: {
        margin: "dense"
      },
      MuiFormControl: {
        margin: "dense"
      },
      MuiFormHelperText: {
        margin: "dense"
      },
      MuiIconButton: {
        size: "small"
      },
      MuiInputBase: {
        margin: "dense"
      },
      MuiInputLabel: {
        margin: "dense"
      },
      MuiListItem: {
        dense: true
      },
      MuiOutlinedInput: {
        margin: "dense"
      },
      MuiFab: {
        size: "small"
      },
      MuiTable: {
        size: "small"
      },
      MuiTextField: {
        margin: "dense"
      },
      MuiToolbar: {
        variant: "dense"
      }
    },
    overrides: {
      MuiIconButton: {
        sizeSmall: {
          // minimal touch target hit spacing
          marginLeft: 4,
          marginRight: 4,
          padding: 12
        }
      }
    }
  });
}

function usingIdentity(themeOptions) {
  return themeOptions;
}

export const DispatchContext = React.createContext(() => {
  throw new Error("Forgot to wrap component in ThemeContext.Provider");
});

const useEnhancedEffect =
  typeof window === "undefined" ? React.useEffect : React.useLayoutEffect;

export function ThemeProvider(props) {
  const { children } = props;

  const [themeOptions, dispatch] = React.useReducer((state, action) => {
    switch (action.type) {
      case "SET_SPACING":
        return {
          ...state,
          spacing: action.payload
        };
      case "INCREASE_SPACING": {
        return {
          ...state,
          spacing: state.spacing + 1
        };
      }
      case "DECREASE_SPACING": {
        return {
          ...state,
          spacing: state.spacing - 1
        };
      }
      case "SET_DENSE":
        return {
          ...state,
          dense: action.payload
        };
      case "RESET_DENSITY":
        return {
          ...state,
          dense: themeInitialOptions.dense,
          spacing: themeInitialOptions.spacing
        };
      case "RESET_COLORS":
        return {
          ...state,
          paletteColors: themeInitialOptions.paletteColors
        };
      case "CHANGE":
        return {
          ...state,
          paletteType: action.payload.paletteType || state.paletteType,
          // direction: action.payload.direction || state.direction,
          paletteColors: action.payload.paletteColors || state.paletteColors
        };
      default:
        throw new Error(`Unrecognized type ${action.type}`);
    }
  }, themeInitialOptions);

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const preferredType = prefersDarkMode ? "dark" : "light";
  const {
    dense,
    paletteColors,
    paletteType = preferredType,
    spacing
  } = themeOptions;

  const theme = React.useMemo(() => {
    const themeDecorator = dense ? usingHighDensity : usingIdentity;
    const nextTheme = createMuiTheme(
      themeDecorator({
        nprogress: {
          color: paletteType === "light" ? "#000" : "#fff"
        },
        palette: {
          primary: {
            main: paletteType === "light" ? blue[700] : blue[200]
          },
          secondary: {
            main: paletteType === "light" ? darken(pink.A400, 0.1) : pink[200]
          },
          type: paletteType,
          background: {
            default: paletteType === "light" ? "#fff" : "#121212"
          },
          ...paletteColors
        },
        spacing
      })
    );

    nextTheme.palette.background.level2 =
      paletteType === "light" ? nextTheme.palette.grey[100] : "#333";

    nextTheme.palette.background.level1 =
      paletteType === "light" ? "#fff" : nextTheme.palette.grey[900];

    return nextTheme;
  }, [dense, paletteColors, paletteType, spacing]);

  React.useEffect(() => {
    // Expose the theme as a global variable so people can play with it.
    if (process.browser) {
      window.theme = theme;
    }
  }, [theme]);

  return (
    <MuiThemeProvider theme={theme}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </MuiThemeProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node
};

/**
 * @returns {(nextOptions: Partial<typeof themeInitialOptions>) => void}
 */
export function useChangeTheme() {
  const dispatch = React.useContext(DispatchContext);
  return React.useCallback(
    options => dispatch({ type: "CHANGE", payload: options }),
    [dispatch]
  );
}