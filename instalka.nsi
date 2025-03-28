!include "MUI2.nsh"
Unicode true

Outfile "Touhou9_PatchInstaller.exe"

!define MUI_WELCOMEPAGE_TITLE_3LINES
!define MUI_FINISHPAGE_TITLE_3LINES
!define MUI_DIRECTORYPAGE_TEXT_TOP $(DEST)

!insertmacro MUI_PAGE_WELCOME
!insertmacro MUI_PAGE_COMPONENTS
!insertmacro MUI_PAGE_DIRECTORY
!insertmacro MUI_PAGE_INSTFILES
!insertmacro MUI_PAGE_FINISH

!insertmacro MUI_UNPAGE_WELCOME
!insertmacro MUI_UNPAGE_CONFIRM
!insertmacro MUI_UNPAGE_INSTFILES
!insertmacro MUI_UNPAGE_FINISH

!insertmacro MUI_LANGUAGE "English"
!insertmacro MUI_LANGUAGE "Polish"

LangString NAME ${LANG_ENGLISH} "Patch for Touhou Phantasmagoria of Flower View"
LangString NAME ${LANG_POLISH} "Łatka do Touhou Phantasmagoria of Flower View"

Name $(Name)

LangString PAGE_TITLE ${LANG_ENGLISH} "Touhou Phantasmagoria of Flower View Patch Installer"
LangString PAGE_TITLE ${LANG_POLISH} "Instalator Łatki Touhou Phantasmagoria of Flower View"

LangString COMPONENT_TEXT ${LANG_ENGLISH} "Select the components you want to install:"
LangString COMPONENT_TEXT ${LANG_POLISH} "Wybierz komponenty do zainstalowania:"

LangString UNINSTALL_COMPLETE ${LANG_ENGLISH} "Uninstallation completed!"
LangString UNINSTALL_COMPLETE ${LANG_POLISH} "Deinstalacja zakończona!"

LangString MAIN_INSTALL ${LANG_ENGLISH} "Main Installation"
LangString MAIN_INSTALL ${LANG_POLISH} "Główna instalacja"

LangString MAIN_DESC ${LANG_ENGLISH} "Install all necessary files, including thcrap, adonis2, vpatch, and the patch itself."
LangString MAIN_DESC ${LANG_POLISH} "Instaluje wszystkie wymagane pliki, w tym thcrap, adonis2, vpatch oraz sam patch."

LangString SHORT_INSTALL ${LANG_ENGLISH} "Desktop Shortcuts"
LangString SHORT_INSTALL ${LANG_POLISH} "Skróty na pulpicie"

LangString SHORT_DESC ${LANG_ENGLISH} "Create desktop shortcuts for singleplayer and multiplayer modes."
LangString SHORT_DESC ${LANG_POLISH} "Tworzy skróty na pulpicie dla trybu dla jednej osoby oraz gry wieloosobowej."

LangString LEGACY_INSTALL ${LANG_ENGLISH} "Legacy Controls in Multiplayer"
LangString LEGACY_INSTALL ${LANG_POLISH} "Stare niezmienione sterowanie w grze wieloosobowej"

LangString LEGACY_DESC ${LANG_ENGLISH} "Retains the original controls in multiplayer mode. Ensures compatibility with players using new controls!"
LangString LEGACY_DESC ${LANG_POLISH} "Dla rozgrywki multiplayer zachowuje oryginalne sterowanie. Kompatybilne z innymi graczami używającymi zaktualizowanego sterowania!"

LangString DEST ${LANG_ENGLISH} "To install the patch, you need to select the folder containing Touhou Phantasmagoria of Flower View. To do this, click the 'Browse...' button and choose the appropriate folder. If you have the game on Steam, go to your Library, right-click on the game, and select 'Properties...' Then navigate to 'Installed Files' and finally click on 'Browse...' This will open the location of your game." 
LangString DEST ${LANG_POLISH} "Aby zainstalować łatke należy wybrać folder z grą Touhou Phantasmagoria of Flower View. W tym celu należy kliknąć przycisk 'Przeglądaj...' i wybrać folder. Jeśli masz gre na Steamie wejdź w Biblioteke gier kliknąć prawym przyciskiem na gre i wciśnij 'Właściwości...'. Następnie klikamy w 'Zainstalowane pliki' i na koniec w 'Przeglądaj...' uruchomi to nam lokalizacje naszej gry."


ComponentText "$(COMPONENT_TEXT)" "Components:" ""

Section $(MAIN_INSTALL) SEC_MAIN
    # Set the installation directory
    SetOutPath "$INSTDIR"

    # Copy main application files
    File "adonis2.exe"
    File "adonis2.ini"
    File "adonis2e.exe"
    File "Cirno.ttf"
    File "vpatch.exe"
    File "vpatch.ini"
    File "Touhou 9 - Rework MultiPlayer.bat"
    File "Touhou 9 - Rework SinglePlayer.bat"
    File "score.dat"
    File /oname=$INSTDIR\adonis2.dll "adonis2.dll"
    # Copy local files from thcrap 
    SetOutPath "$INSTDIR\thcrap"
    File /r "thcrap\*.*"
    StrCmp $LANGUAGE ${LANG_POLISH} PolishAction EnglishAction
    PolishAction:
        CopyFiles "$INSTDIR\thcrap\config\rework_pl.js" "$INSTDIR\thcrap\config\rework.js"
        Goto CommonAction
    EnglishAction:
        RMDir /r "$INSTDIR\thcrap\repos\thpatch\lang_pl"
    CommonAction:
    Delete "$INSTDIR\thcrap\config\rework_pl.js"
    # Create uninstaller
    WriteUninstaller "$INSTDIR\Uninstall.exe"
SectionEnd

Section $(SHORT_INSTALL) SEC_SHORTCUTS
    # Create desktop shortcuts
    CreateShortcut "$DESKTOP\Touhou 9 - Rework SinglePlayer.lnk" "$INSTDIR\Touhou 9 - Rework SinglePlayer.bat" "" "$INSTDIR\th09.exe" 0
    CreateShortcut "$DESKTOP\Touhou 9 - Rework MultiPlayer.lnk" "$INSTDIR\Touhou 9 - Rework MultiPlayer.bat" "" "$INSTDIR\th09.exe" 0
SectionEnd

Section /o $(LEGACY_INSTALL) SEC_LEGACY
    # Install appropriate Adonis DLL
    File /oname=$INSTDIR\adonis2.dll "adonis2_old.dll"
SectionEnd

Section "Uninstall" SEC_UNINSTALL
    # Remove all installed files
    Delete "$INSTDIR\adonis2.dll"
    Delete "$INSTDIR\adonis2.exe"
    Delete "$INSTDIR\adonis2e.exe"
    Delete "$INSTDIR\adonis2.ini"
    Delete "$INSTDIR\Cirno.ttf"
    Delete "$INSTDIR\vpatch.exe"
    Delete "$INSTDIR\vpatch.ini"
    Delete "$INSTDIR\score.dat"
    Delete "$INSTDIR\Touhou 9 - Rework MultiPlayer.bat"
    Delete "$INSTDIR\Touhou 9 - Rework SinglePlayer.bat"
    Delete "$DESKTOP\Touhou 9 - Rework SinglePlayer.lnk"
    Delete "$DESKTOP\Touhou 9 - Rework MultiPlayer.lnk"
    RMDir /r "$INSTDIR\thcrap"
    Delete "$INSTDIR\Uninstall.exe"

    MessageBox MB_OK "$(UNINSTALL_COMPLETE)"
SectionEnd


!insertmacro MUI_FUNCTION_DESCRIPTION_BEGIN
  !insertmacro MUI_DESCRIPTION_TEXT ${SEC_MAIN} $(MAIN_DESC)
  !insertmacro MUI_DESCRIPTION_TEXT ${SEC_SHORTCUTS} $(SHORT_DESC)
  !insertmacro MUI_DESCRIPTION_TEXT ${SEC_LEGACY} $(LEGACY_DESC)
!insertmacro MUI_FUNCTION_DESCRIPTION_END



Function .onInit

  !insertmacro MUI_LANGDLL_DISPLAY

FunctionEnd