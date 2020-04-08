import React, {useEffect, useRef, useState} from "react";
import {Link, NoteView, Sidebar, Theme} from "../models";
import {APP_LINKS} from "../utils";

import  TopBar from "./topbar/topbar";
import  SideBar from './sidebar/sidebar';
import  MainContainer from './main/main';

export type LayoutProps = {

};

function usePrevious(value: any) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

const initFromStorage = <T extends {} | null>(key: string, initVal: T): T => localStorage
    .getItem(key) as T || initVal;

const Layout = (props: LayoutProps) => {
    const [sideBar, setSideBar] = useState<Sidebar>(
        initFromStorage<Sidebar>('sideBar', 'expanded')
    );

    const [noteView, setNoteView] = useState<NoteView>(
        initFromStorage<NoteView>('noteView', 'tiled')
    );

    const [colorTheme, setColorTheme] = useState<Theme>(
        initFromStorage<Theme>('colorTheme', 'dark')
    );


    const [links, setLinks] = useState<Link[]>(APP_LINKS);
    const [activeLink, setActiveLink] = useState<number>(0);

    const prevSideBar = usePrevious(sideBar);
    const prevNoteView = usePrevious(noteView);
    const prevColorTheme = usePrevious(colorTheme);

    useEffect(() => {
        if (prevSideBar !== sideBar) {
            localStorage.setItem('sideBar', sideBar);
        }

        if (prevNoteView !== noteView) {
            localStorage.setItem('noteView', noteView)
        }

        if (prevColorTheme !== colorTheme) {
            localStorage.setItem('colorTheme', colorTheme);
            document.body.className = colorTheme;
        }

    }, [sideBar, noteView, colorTheme]);

    return (<>

        <TopBar
            sideBar={sideBar}
            noteView={noteView}
            colorTheme={colorTheme}
            links={links}
            activeLink={activeLink}
            changeSideBar={v => setSideBar(v)}
            changeNoteView={v => setNoteView(v)}
            changeColorTheme={v => setColorTheme(v)}
        />

        <SideBar
            sideBar={sideBar}
            links={links}
            activeLink={activeLink}
            changeActiveLink={v => setActiveLink(v)}
        />


        <MainContainer
            links={links}
            activeLink={activeLink}
        />

    </>);
};

export default Layout;