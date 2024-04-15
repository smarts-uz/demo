// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tCfLmaaHRZLhqCMNBDT3fx
// Component: Tqk74FgapoaH

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Navbar from "../../Navbar"; // plasmic-import: cAZ7Fyj9SuEu/component
import Clubs from "../../Clubs"; // plasmic-import: QoZM5zX7KRbO/component
import BreakinNewsCards from "../../BreakinNewsCards"; // plasmic-import: iFQsXPuWlxKP/component
import Footer from "../../Footer"; // plasmic-import: cx6aWNqCuwPL/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "../website_starter/plasmic.module.css"; // plasmic-import: tCfLmaaHRZLhqCMNBDT3fx/projectcss
import sty from "./PlasmicBreakinNews.module.css"; // plasmic-import: Tqk74FgapoaH/css

createPlasmicElementProxy;

export type PlasmicBreakinNews__VariantMembers = {};
export type PlasmicBreakinNews__VariantsArgs = {};
type VariantPropType = keyof PlasmicBreakinNews__VariantsArgs;
export const PlasmicBreakinNews__VariantProps = new Array<VariantPropType>();

export type PlasmicBreakinNews__ArgsType = {};
type ArgPropType = keyof PlasmicBreakinNews__ArgsType;
export const PlasmicBreakinNews__ArgProps = new Array<ArgPropType>();

export type PlasmicBreakinNews__OverridesType = {
  root?: Flex__<"div">;
  navbar?: Flex__<typeof Navbar>;
  freeBox?: Flex__<"div">;
  clubs?: Flex__<typeof Clubs>;
  text?: Flex__<"div">;
  footer?: Flex__<typeof Footer>;
};

export interface DefaultBreakinNewsProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicBreakinNews__RenderFunc(props: {
  variants: PlasmicBreakinNews__VariantsArgs;
  args: PlasmicBreakinNews__ArgsType;
  overrides: PlasmicBreakinNews__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <Navbar
            data-plasmic-name={"navbar"}
            data-plasmic-override={overrides.navbar}
            className={classNames("__wab_instance", sty.navbar)}
          />

          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            <Clubs
              data-plasmic-name={"clubs"}
              data-plasmic-override={overrides.clubs}
              className={classNames("__wab_instance", sty.clubs)}
            />
          </div>
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            {"Breaking news"}
          </div>
          <div className={classNames(projectcss.all, sty.columns__vdxJm)}>
            <div className={classNames(projectcss.all, sty.column__o9Dw)}>
              <BreakinNewsCards
                className={classNames(
                  "__wab_instance",
                  sty.breakinNewsCards__n28G8
                )}
              />
            </div>
            <div className={classNames(projectcss.all, sty.column__mPtpT)}>
              <BreakinNewsCards
                className={classNames(
                  "__wab_instance",
                  sty.breakinNewsCards__o9ZmE
                )}
                variant2={true}
              />
            </div>
            <div className={classNames(projectcss.all, sty.column__jTvod)}>
              <BreakinNewsCards
                className={classNames(
                  "__wab_instance",
                  sty.breakinNewsCards___6Z8Ek
                )}
                variant3={true}
              />
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.columns__o7Uq6)}>
            <div className={classNames(projectcss.all, sty.column__kTt3)}>
              <BreakinNewsCards
                className={classNames(
                  "__wab_instance",
                  sty.breakinNewsCards__czWip
                )}
              />
            </div>
            <div className={classNames(projectcss.all, sty.column___1OmLp)}>
              <BreakinNewsCards
                className={classNames(
                  "__wab_instance",
                  sty.breakinNewsCards__kaTZz
                )}
              />
            </div>
            <div className={classNames(projectcss.all, sty.column__tBfzg)}>
              <BreakinNewsCards
                className={classNames(
                  "__wab_instance",
                  sty.breakinNewsCards__yybOp
                )}
              />
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.columns___6Unsz)}>
            <div className={classNames(projectcss.all, sty.column__bv9A7)}>
              <BreakinNewsCards
                className={classNames(
                  "__wab_instance",
                  sty.breakinNewsCards__sozX
                )}
              />
            </div>
            <div className={classNames(projectcss.all, sty.column__grsJ4)}>
              <BreakinNewsCards
                className={classNames(
                  "__wab_instance",
                  sty.breakinNewsCards___9NuKo
                )}
              />
            </div>
            <div className={classNames(projectcss.all, sty.column__n3Mza)}>
              <BreakinNewsCards
                className={classNames(
                  "__wab_instance",
                  sty.breakinNewsCards__cPJgH
                )}
              />
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.columns__qfdZ9)}>
            <div className={classNames(projectcss.all, sty.column__qSqwh)}>
              <BreakinNewsCards
                className={classNames(
                  "__wab_instance",
                  sty.breakinNewsCards__dRl1I
                )}
                rmTeam={true}
              />
            </div>
          </div>
          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "navbar", "freeBox", "clubs", "text", "footer"],
  navbar: ["navbar"],
  freeBox: ["freeBox", "clubs"],
  clubs: ["clubs"],
  text: ["text"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  freeBox: "div";
  clubs: typeof Clubs;
  text: "div";
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBreakinNews__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBreakinNews__VariantsArgs;
    args?: PlasmicBreakinNews__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBreakinNews__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBreakinNews__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicBreakinNews__ArgProps,
          internalVariantPropNames: PlasmicBreakinNews__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBreakinNews__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBreakinNews";
  } else {
    func.displayName = `PlasmicBreakinNews.${nodeName}`;
  }
  return func;
}

export const PlasmicBreakinNews = Object.assign(
  // Top-level PlasmicBreakinNews renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    freeBox: makeNodeComponent("freeBox"),
    clubs: makeNodeComponent("clubs"),
    text: makeNodeComponent("text"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicBreakinNews
    internalVariantProps: PlasmicBreakinNews__VariantProps,
    internalArgProps: PlasmicBreakinNews__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicBreakinNews;
/* prettier-ignore-end */
