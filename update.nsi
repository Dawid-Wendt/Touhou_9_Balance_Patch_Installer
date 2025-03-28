!include "MUI2.nsh"

Outfile "Update.exe"

!insertmacro MUI_PAGE_INSTFILES
!insertmacro MUI_LANGUAGE "English"

Section "Update Wensomt Repository" SEC_UPDATE
    # Ustawienie katalogu instalacyjnego na podstawie lokalizacji pliku EXE
    StrCpy $INSTDIR "$EXEDIR"

    # Ścieżka do lokalizacji repozytorium
    SetOutPath "$INSTDIR\thcrap\repos\Wensomt"

    # Usunięcie starego repozytorium
    MessageBox MB_OK "Removing old Wensomt repository..."
    RMDir /r "$INSTDIR\thcrap\repos\Wensomt"
    IfErrors 0 +2
    MessageBox MB_OK "Failed to remove old repository. Continuing..."

    # Pobranie nowego repozytorium za pomocą NSISdl
    MessageBox MB_OK "Downloading new Wensomt repository..."
    NSISdl::download "https://github.com/Wensomt/Wensomt/archive/refs/heads/main.zip" "$TEMP\Wensomt.zip"
    Pop $0
    StrCmp $0 "success" +2
    MessageBox MB_OK "Failed to download the latest repository. Please check your internet connection."
    Goto EndSection

    # Rozpakowanie pobranego ZIP
    MessageBox MB_OK "Extracting repository..."
    ExecWait '"$PLUGINSDIR\7z.exe" x "$TEMP\Wensomt.zip" -o"$INSTDIR\thcrap\repos\Wensomt" -y'
    IfErrors 0 +2
    MessageBox MB_OK "Failed to extract the repository archive. Please try again."
    Goto EndSection

    MessageBox MB_OK "Repository successfully updated!"

    EndSection:
SectionEnd